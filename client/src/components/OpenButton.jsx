import styled from 'styled-components';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

const StyledOpenButton = styled.button`
	border: none;
	border-radius: 4px;
	background-color: var(--bg);
	color: white;
	padding: 4px 8px;
`;

const OpenButton = ({ setShow, show }) => {
	return (
		<StyledOpenButton onClick={setShow}>
			{show ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
		</StyledOpenButton>
	);
};

export default OpenButton;
