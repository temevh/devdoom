import { Card } from "@mui/material";
import { colors } from "../styles";

export const TopicBadge = ({
  topic,
  onClick,
}: {
  topic: string;
  onClick?: () => void;
}) => {
  return (
    <Card
      variant="outlined"
      onClick={onClick}
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
        cursor: onClick ? "pointer" : "default",
        borderRadius: 4,
      }}
    >
      {topic.toUpperCase()}
    </Card>
  );
};
