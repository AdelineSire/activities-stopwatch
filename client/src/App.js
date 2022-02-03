import { useEffect, useState } from 'react';

import ActivityForm from './components/ActivityForm';
import ActivityDraw from './components/ActivityDraw';

import { getActivity } from './services/api';

function App() {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		getActivity('hgnukfy').then((activity) => {
			setActivities((activities) => [...activities, activity]);
			console.log('activity in useEffect', activity);
		});
	}, []);

	return (
		<>
			{console.log('activities in return App', activities[0].name)}
			<div>
				<ActivityForm />
				<ActivityDraw activityName={activities[0].name} />
			</div>
		</>
	);
}

export default App;
