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
import { TOPIC_DETAILS } from "@/constants/topics";

function NavBar() {
  const { user } = useUserStore();

  useEffect(() => {
    if (user?.topics) {
      console.log("users topics", user.topics);
    }
  }, [user?.topics]);

  const addTopic = () => {
    alert("Add topic clicked");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
              {user.topics.map((topic) => {
                const details =
                  TOPIC_DETAILS[topic as keyof typeof TOPIC_DETAILS];

                return (
                  <Tooltip
                    key={topic}
                    title={details?.description || "No description available"}
                    arrow
                  >
                    <div>
                      <TopicBadge topic={topic} />
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
