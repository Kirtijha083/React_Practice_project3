import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelectors";
import RoleDice from "./RoleDice";
import { useState } from "react";

export default function GamePlay() {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {

    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    } //ye isly taki jb btn selected na ho to dice clcki na ho oe number na bdhe or error msg aaye

    // setError("")   // true hone ke liye error ko unset kr denge..with empty array..........then using error in numberselector 

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    } // isse hoga ki btn and dice ka number same hone pe score increase hoga jitna number aaya h or same nhi hone pe -2 hoga

    setSelectedNumber(undefined); //isse hoga ki btn click krne ke baad vo inselected ho jye
  };


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector error={error}  setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
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