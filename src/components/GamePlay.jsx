import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelectors";
import RoleDice from "./RoleDice";
import { useState } from "react";

export default function GamePlay() {

  const [score, setScore] = useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randonNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randonNumber);
  }


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
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