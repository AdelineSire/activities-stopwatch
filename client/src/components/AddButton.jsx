import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';

const StyledButton = styled.button`
	all: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--prim);
	color: white;
	height: 32px;
	width: 40px;
	border-radius: 8px;
`;

function Button() {
	return (
		<StyledButton>
			<AddIcon />
		</StyledButton>
	);
}

export default Button;
