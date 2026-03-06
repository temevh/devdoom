import { Card, Box, Typography } from "@mui/material";
import { colors } from "../styles";
import { useState } from "react";
import { Trash2, Plus, Check } from 'lucide-react';

export const TopicBadge = ({
  topic,
  topicPressed,
  editing,
  selected,
}: {
  topic: string;
  topicPressed?: (topic: string) => void;
  editing?: boolean;
  selected: boolean;
}) => {
  const [hover, setHover] = useState(false);

  const isPlusButton = topic === "+";
  const backgroundColor = selected ? colors.primary.main : colors.secondary.main;

  return (
    <Card
      variant="outlined"
      onClick={() => topicPressed?.(topic)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        height: 40,
        minWidth: 40,
        width: "fit-content",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,

        backgroundColor: backgroundColor,
        border: selected ? `2px solid white` : `1px solid transparent`,
        boxShadow: selected ? "0 0 10px rgba(255,255,255,0.3)" : "none",

        color: colors.primary.contrastText,
        cursor: (topicPressed && editing) || isPlusButton ? "pointer" : "default",
        borderRadius: "8px",
        transition: "all 0.2s ease",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: isPlusButton ? 24 : 14,
          textTransform: "uppercase",
          opacity: hover && editing ? 0.2 : 1,
          transition: "opacity 0.2s ease",
          whiteSpace: "nowrap",
        }}
      >
        {topic.replaceAll("_", " ")}
      </Typography>

      {hover && editing && !isPlusButton && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {selected ? <Trash2 size={20} color="white" /> : <Plus size={20} color="white" />}
        </Box>
      )}

      {selected && !hover && !isPlusButton && (
        <Box sx={{ position: "absolute", top: 2, right: 4 }}>
          <Check size={12} />
        </Box>
      )}
    </Card>
  );
};