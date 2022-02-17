import useToggle from "../hooks/UseToggle";
import styled from "styled-components";
import OpenButton from "./OpenButton";
import PlayButton from "./PlayButton";
import ActivityName from "./ActivityName";
import DelButton from "./DelButton";

const StyledActivityDraw = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;
const StyledButtonContainer = styled.div`
display : flex;`;

const ActivityDraw = ({ activity, delActivity }) => {
  const [show, setShow] = useToggle(false);
  const [play, setPlay] = useToggle(true);

  return (
    <StyledActivityDraw>
      <StyledButtonContainer>
        <DelButton activity={activity} delActivity={delActivity}/>
        <OpenButton setShow={setShow} show={show} />
      </StyledButtonContainer>
      {show && <p>coucou</p>}
      <ActivityName activityName={activity.name} />
      <PlayButton setPlay={setPlay} play={play} />
    </StyledActivityDraw>
  );
};

export default ActivityDraw;
