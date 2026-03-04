import { Card } from "@mui/material";
import { colors } from "../styles";

export const TopicBadge = ({
  topic,
  topicPressed,
  editing,
}: {
  topic: string;
  topicPressed?: (topic: string) => void;
  editing?: boolean
}) => {
  return (
    <Card
      variant="outlined"
      onClick={() => {topicPressed(topic)}}
      style={{
        height: 40,
        minWidth: 40,
        width: "fit-content",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 8px",

        backgroundColor: colors.secondary.main,
        color: colors.primary.contrastText,
        fontWeight: "bold",
        fontSize: topic === "+" ? 24 : 16,
        cursor: topicPressed && editing ? "pointer" : "default",
        borderRadius: 4,
      }}
    >
      {topic.toUpperCase()}
    </Card>
  );
};
