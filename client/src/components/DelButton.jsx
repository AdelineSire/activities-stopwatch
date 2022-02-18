import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledDeleteButton = styled.button`
  all: unset;
  background-color: rgb(200, 0, 0);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 4px 8px;
`;

function DeleteButton({ delActivity, activity }) {
  return (
    <StyledDeleteButton onClick={() => {delActivity(activity._id); }}>
      <DeleteIcon />
    </StyledDeleteButton>
  );
}

export default DeleteButton;