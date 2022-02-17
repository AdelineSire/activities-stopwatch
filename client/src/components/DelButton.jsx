import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(200,0,0);
  color: white;
  height: 32px;
  width: 40px;
  border-radius: 8px;
`;

function DelButton({delActivity, activity}) {
  return (
      <StyledButton onClick={() => { console.log("onclickdel"); delActivity(activity._id) }}>
      <DeleteIcon />
    </StyledButton>
  );
}

export default DelButton;
