import ActivityDraw from './ActivityDraw';

const ActivityList = ({ activities }) => {
	return (
		<section>
			{activities.map((activity) => (
				<ActivityDraw key={activity._id} activityName={activity.name} />
			))}
		</section>
	);
};

export default ActivityList;
