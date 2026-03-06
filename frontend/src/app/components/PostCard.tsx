import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { colors } from "../styles";
import { Post } from "../types";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card
      elevation={0}
      sx={{
        minWidth: 275,
        borderRadius: 3,
        border: `1px solid ${colors.secondary.main}33`,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardContent sx={{ pb: 1 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}
        >
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag.toUpperCase()}
              size="small"
              sx={{
                height: 20,
                fontSize: "0.65rem",
                fontWeight: 700,
                backgroundColor: `${colors.secondary.main}15`,
                color: colors.secondary.main,
                borderRadius: 1,
              }}
            />
          ))}
        </Stack>

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 800,
            lineHeight: 1.3,
            mb: 1,

            overflow: "hidden",
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Source: {post.source}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          component={Link}
          href={post.url}
          target="_blank"
          size="small"
          endIcon={<ExternalLink size={14} />}
          sx={{
            fontWeight: 700,
            textTransform: "none",
            color: colors.primary.main,
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          View Post
        </Button>
      </CardActions>
    </Card>
  );
};
