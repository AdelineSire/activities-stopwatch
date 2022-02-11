import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

import { getActivities, deleteActivity } from './services/api';

const StyledParagraph = styled.p`
	color: white;
`;

function App()
{
	const [isloading, setIsloading] = useState(true);
	const [activities, setActivities] = useState([]);

	useEffect(() =>
	{
		console.log("useEffect");
		getActivities()
			.then((activities) =>
			{
				if (activities !== null) setActivities(activities);
				setIsloading(false);
			})
			.catch((err) => console.log(err));
	}, [isloading]);

	useEffect(() =>
	{
		console.log("islod : effec", isloading);
		setIsloading(false);

	}, [isloading]);


	const DeleteActivity = (id) =>
	{
		console.log("DeleteActivity Isloading : ici exec !!! "); // XXX
		setIsloading(true)

		deleteActivity(id)
			.then(() =>
			{
				console.log("DeleteActivity Isloading : jamais exec ??? "); // XXX
				setIsloading(true)
			}) // lance le rechargement XXX
			.catch(err => 
			{
				console.log('DeleteActivity in App err : ', err);
			})
	}

	return (
		<>
			<ActivityForm setIsloading={setIsloading} />
			{isloading ? (
				<StyledParagraph>Loading...</StyledParagraph>
			) : activities.length > 0 ? (
				<div>
					{/* {console.log('length', activities, activities.length)} */}

					<ActivityList activities={activities} delActivity={DeleteActivity} />
				</div>
			) : (
				<StyledParagraph>No activity registered</StyledParagraph>
			)}
		</>
	);
}

export default App;
