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

const ActivityDraw = ({ activity, delActivity, handlePlay, isPlaying }) => {
  const [show, setShow] = useToggle(false);

  return (
    <StyledActivityDraw>
      <StyledButtonContainer>
        <DeleteButton activity={activity} delActivity={delActivity}/>
        <OpenButton setShow={setShow} show={show} />
      </StyledButtonContainer>
      {show && <p>coucou</p>}
      <ActivityName activityName={activity.name} />
      <PlayButton setPlay={() => { handlePlay(activity._id); console.log("click play", isPlaying)}} isPlaying={isPlaying} />
    </StyledActivityDraw>
  );
};

export default ActivityDraw;
