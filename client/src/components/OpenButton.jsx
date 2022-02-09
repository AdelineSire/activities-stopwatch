import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

const OpenButton = ({ setShow, show }) => {
	return (
		<button onClick={setShow}>
			{show ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
		</button>
	);
};

export default OpenButton;
