import styled from "styled-components";
import { Button } from "../styled/Button";

export default function StartGame ({toggle})  {

  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice_img" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content { /* ye saas type css ko likhe hai*/
      h1{
        font-size: 96px;
        white-space: nowrap;   /* isse sara h1 ka text ek hi line me hoga*/
      }
    }
`;

// const Button = styled.button`
//     color: white;
//     padding: 10px 18px;

//     width: 220px;

//     background: #000000;
//     border-radius: 5px;

//     border: none;
//     font-size: 16px;
//     border: 1px solid transparent;
//     transition: 0.4s background ease-in;
//     cursor: pointer;

//     &:hover {  /* here, & is sudo for hover effect on btn*/
//     background-color: white;
//     border: 1px solid black;
//     color: black;
//     transition: 0.3s background ease-in;
//   }
// `; //.................writing this style code on button.js file in styled folder
