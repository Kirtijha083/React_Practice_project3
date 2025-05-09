import styled from "styled-components";


export default function RoleDice({
  roleDice, currentDice
}) {



  //     const generateRandomNumber = (min, max) => {
  //         // console.log(Math.floor(Math.random() * (max - min) + min));
  //         return Math.floor(Math.random() * (max - min) + min);
  //     };

  // const roleDice = () => {
  //     const randonNumber = generateRandomNumber(1, 7);
  //     setCurrentDice((prev) => randonNumber);
  // }

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;