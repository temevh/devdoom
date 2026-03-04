"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { TopicBadge, TopicPicker } from "./components/";
import { useUserStore } from "@/store/UserStore";
import { Tooltip } from "@mui/material";
import { GetTopics, AddTopic, RemoveTopic } from "./api/topics";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CommonModal from "./common/CommonModal";

function NavBar() {
  const { user, setTopics } = useUserStore();
  const queryClient = useQueryClient();
  const {
    data: allTopics = [],
    status,
    error,
  } = useQuery({
    queryKey: ["topics"],
    queryFn: GetTopics,
    select: (res) => res.data,
  });

  useEffect(() => {
    if (status === "error") console.error("Query Error:", error);
    if (status === "pending") console.log("Loading topics...");
  }, [status, error]);


  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const userTopics = user?.topics;

  useEffect(() => {
    console.log("userTopics", userTopics)
  }, [userTopics])

  async function topicPressed(topicName: string) {
    try {
      const isRemoving = user?.topics.includes(topicName);
      let response;

      if (isRemoving) {
        response = await RemoveTopic(topicName);
      } else {
        response = await AddTopic(topicName);
      }

      if (response.status === 200 && user) {
        const updatedTopics = isRemoving
          ? user.topics.filter((t) => t !== topicName)
          : [...user.topics, topicName];

        setTopics(updatedTopics);
      }

      queryClient.invalidateQueries({ queryKey: ["user"] });
    } catch (err) {
      console.error("❌ Failed to toggle topic:", err);
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Doom.Dev
          </Typography>
          {user?.topics && (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
              {user.topics.map((userTopic) => {
                const topicData = allTopics.find((t) => t.name === userTopic);
                return (
                  <Tooltip
                    key={userTopic}
                    title={topicData?.description || "No description available"}
                    arrow
                  >
                    <div>
                      <TopicBadge topic={userTopic} />
                    </div>
                  </Tooltip>
                );
              })}
              <Tooltip title={"Add a new topic to your interests"} arrow>
                <div>
                  <TopicBadge topic="+" onClick={handleOpenModal} editing topicPressed={handleOpenModal} />
                </div>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
        {modalOpen && (
          <CommonModal handleClose={handleCloseModal}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                padding: "1rem",
                justifyContent: "center",
              }}
            >
              {allTopics.map((topic) => (
                <div
                  key={topic.name}
                  style={{
                    height: 30,
                    lineHeight: 30,

                    margin: "0 4px 4px 0",
                    textAlign: "center",
                  }}
                >
                  <TopicBadge topic={topic.name} topicPressed={topicPressed} editing selected={userTopics?.includes(topic.name)} />
                </div>
              ))}
            </div>
          </CommonModal>
        )}
      </Container>
    </AppBar>
  );
}
export default NavBar;
