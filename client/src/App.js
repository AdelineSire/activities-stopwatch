import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

import { getActivities } from './services/api';

const StyledParagraph = styled.p`
	color: white;
`;

function App() {
	const [isloading, setIsloading] = useState(true);
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		getActivities()
			.then((activities) => {
				if (activities !== null) setActivities(activities);
				setIsloading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<ActivityForm />
			{isloading ? (
				<StyledParagraph>Loading...</StyledParagraph>
			) : activities.length > 0 ? (
				<div>
					{/* {console.log('length', activities, activities.length)} */}

					<ActivityList activities={activities} />
				</div>
			) : (
				<StyledParagraph>No activity registered</StyledParagraph>
			)}
		</>
	);
}

export default App;
