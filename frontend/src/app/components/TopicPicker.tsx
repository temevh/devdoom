import { TopicBadge } from "./TopicBadge";

const TopicPicker = ({ topics }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      {topics.map((topic) => (
        <div
          key={topic.name}
          style={{
            height: 30,
            lineHeight: 30,

            margin: "0 4px 4px 0",
            textAlign: "center",
          }}
        >
          <TopicBadge topic={topic.name} />
        </div>
      ))}
    </div>
  );
};

export default TopicPicker;
