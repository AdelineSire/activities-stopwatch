import styled from 'styled-components';
import PlaydArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';

const StyledButton = styled.button`
	/* all: unset; */
	border: none;
	border-radius: 4px;
	padding: 4px 8px;
	background-color: ${(props) => props.color};
	color: white;
`;

const PlayButton = ({ setPlay, play }) => {
	let bg;
	if (play === false) {
		bg = '#a44da6';
	} else {
		bg = '#4d96a6';
	}
	return (
		<StyledButton color={bg} onClick={setPlay}>
			{play ? <Stop /> : <PlaydArrow />}
		</StyledButton>
	);
};

export default PlayButton;
