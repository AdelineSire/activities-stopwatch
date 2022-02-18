import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

import { getActivities, deleteActivity, updateActivity } from './services/api';

const StyledParagraph = styled.p`
	color: white;
`;

function App()
{
	const [isloading, setIsloading] = useState(true);
	const [activities, setActivities] = useState([]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [startDate, setStartDate] = useState(null);

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
		deleteActivity(id)
			.then(() =>
			{
				console.log("DeleteActivity done "); // XXX
				setIsloading(true)
			}) // lance le rechargement XXX
			.catch(err => 
			{
				console.log('DeleteActivity in App err : ', err);
			})
	}

	const handlePlay = (id) =>
	{ 
		// start chrono
		if (isPlaying)
		{
			// stop
			const dateValues = { startDate, stopDate: new Date() };
			const jsonDateValues = JSON.stringify(dateValues);

			// let formData = new FormData();
			// formData.append("mesDonnees", dateValues);

			updateActivity(id, {mesDonnees : jsonDateValues})
				.then(() => { console.log("handlePlay - Activity updated ") })
				.catch(err => { console.log("handlePlay - error :", err) });
			setStartDate(null);
		}
		else
		{
			// start
			setStartDate(new Date())
		}
		setIsPlaying(!isPlaying);
	}


	return (
		<>
			<ActivityForm setIsloading={setIsloading} />
			{isloading ? (
				<StyledParagraph>Loading...</StyledParagraph>
			) : activities.length > 0 ? (
				<div>
					{/* {console.log('length', activities, activities.length)} */}

						<ActivityList activities={activities} handlePlay={handlePlay} isPlaying={isPlaying} delActivity={DeleteActivity} />
				</div>
			) : (
				<StyledParagraph>No activity registered</StyledParagraph>
			)}
		</>
	);
}

export default App;
