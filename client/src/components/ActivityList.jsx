import ActivityDraw from "./ActivityDraw";

const ActivityList = ({ activities, delActivity }) => {
  return (
    <section>
      {activities.map((activity) => {
        return (
          <ActivityDraw
            key={activity._id}
            activity={activity}
            delActivity={delActivity}
          />
        );
      })}
    </section>
  );
};

export default ActivityList;
