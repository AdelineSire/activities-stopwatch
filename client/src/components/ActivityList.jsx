import ActivityDraw from "./ActivityDraw";

const ActivityList = ({ activities, delActivity, handlePlay, isPlaying }) => {
  return (
    <section>
      {activities.map((activity) => {
        return (
          <ActivityDraw
            key={activity._id}
            activity={activity}
            handlePlay={handlePlay}
            isPlaying={isPlaying}
            delActivity={delActivity}
          />
        );
      })}
    </section>
  );
};

export default ActivityList;
