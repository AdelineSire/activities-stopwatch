import useToggle from "../hooks/UseToggle";
import styled from "styled-components";
import OpenButton from "./OpenButton";
import PlayButton from "./PlayButton";
import ActivityName from "./ActivityName";
import DeleteButton from "./DelButton";

const StyledActivityDraw = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;
const StyledButtonContainer = styled.div`
display : flex;
align-items: center;
gap:1rem;`;

const ActivityDraw = ({ activity, delActivity }) => {
  const [show, setShow] = useToggle(false);
  const [play, setPlay] = useToggle(true);

  return (
    <StyledActivityDraw>
      <StyledButtonContainer>
        <DeleteButton activity={activity} delActivity={delActivity}/>
        <OpenButton setShow={setShow} show={show} />
      </StyledButtonContainer>
      {show && <p>coucou</p>}
      <ActivityName activityName={activity.name} />
      <PlayButton setPlay={setPlay} play={play} />
    </StyledActivityDraw>
  );
};

export default ActivityDraw;
