import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelectors";
import RoleDice from "./RoleDice";

export default function GamePlay ()  {

  return (
   <MainContainer>
    <div className="top_section">
   <TotalScore/>
   <NumberSelector/>
   </div>
   <RoleDice/>
   </MainContainer>
  );
};

const MainContainer = styled.main`
 padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
}
`;