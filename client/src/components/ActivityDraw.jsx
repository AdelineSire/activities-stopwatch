import useToggle from '../hooks/UseToggle';
import styled from 'styled-components';
import OpenButton from './OpenButton';
import PlayButton from './PlayButton';
import ActivityName from './ActivityName';

const StyledActivityDraw = styled.div`
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const ActivityDraw = ({ activityName }) => {
	const [show, setShow] = useToggle(false);
	const [play, setPlay] = useToggle(true);

	return (
		<StyledActivityDraw>
			<OpenButton setShow={setShow} show={show} />
			{show && <p>coucou</p>}
			<ActivityName activityName={activityName} />
			<PlayButton setPlay={setPlay} play={play} />
		</StyledActivityDraw>
	);
};

export default ActivityDraw;
