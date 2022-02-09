import ActivityDraw from './ActivityDraw';

const ActivityList = ({ activities }) => {
	return (
		<section>
			{activities.map((activity) => (
				<ActivityDraw activityName={activity.name} />
			))}
		</section>
	);
};

export default ActivityList;
