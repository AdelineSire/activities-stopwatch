import PlaydArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';

const PlayButton = ({ setPlay, play }) => {
	return <button onClick={setPlay}>{play ? <PlaydArrow /> : <Stop />}</button>;
};

export default PlayButton;
