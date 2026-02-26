"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { TopicBadge } from "./TopicBadge";
import { useUserStore } from "@/store/UserStore";

function NavBar() {
  let userTopics: string[];

  const { user } = useUserStore();

  if (user) {
    //console.log(user)
    userTopics = user.topics;
  }

  useEffect(() => {
    console.log("users topics", userTopics);
  }, [userTopics]);

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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
              }}
            >
              {user?.topics?.map((topic) => (
                <TopicBadge topic={topic} key={topic} />
              ))}
              <TopicBadge topic="+" onClick={addTopic} />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
