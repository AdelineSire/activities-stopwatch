import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

import AddButton from './AddButton';

const Form = styled.form`
	display: flex;
	gap: 8px;
	padding: 8px;
`;

const Input = styled.input`
	border: none;
	border-radius: 8px;
	width: 256px;
`;

function ActivityForm() {
	return (
		<Form>
			<Input />
			<AddButton>
				<AddIcon />
			</AddButton>
		</Form>
	);
}

export default ActivityForm;
