const TopicPicker = ({ topics }) => {
  return (
    <div>
      {topics.map((topic) => (
        <p key={topic.id}>{topic.name}</p>
      ))}
    </div>
  );
};

export default TopicPicker;
