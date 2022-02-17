import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";

import { createActivity } from "../services/api";

import AddButton from "./AddButton";

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

function ActivityForm({ setIsloading }) 
{
  const handleSubmit = (e) => 
  {
		e.preventDefault();

    createActivity({ toto: e.target.inputName.value })
			.then(() => {
				setIsloading(true);
				e.target.inputName.value = "";
			})
			.catch((e) => {
				console.log("ActivityForm err ", e);
			});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" defaultValue="" name="inputName" />
      <AddButton>
        <AddIcon />
      </AddButton>
    </Form>
  );
}

export default ActivityForm;
