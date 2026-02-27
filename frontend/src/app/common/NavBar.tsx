"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { TopicBadge } from "./TopicBadge";
import { useUserStore } from "@/store/UserStore";
import { Tooltip } from "@mui/material";
import { GetTopics, AddTopics } from "../api/topics";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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

  const addTopic = async () => {
    try {
      const response = await AddTopics(["data_science_and_ai"]);

      if (response.data && response.data.topics) {
        setTopics(response.data.topics);
      }

      queryClient.invalidateQueries({ queryKey: ["topics"] });
    } catch (err) {
      console.error("Failed to add topics:", err);
    }
  };

  useEffect(() => {
    console.log("aLLtOPICS", allTopics);
  }, [allTopics]);

  useEffect(() => {
    console.log("userTopics", user?.topics);
  }, [user?.topics]);

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
                  <TopicBadge topic="+" onClick={addTopic} />
                </div>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
