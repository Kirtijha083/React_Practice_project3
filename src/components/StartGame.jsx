import styled from "styled-components";

export default function StartGame ()  {

  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice_img" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <button>Play Now</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
    max-width: 1180px;
`

