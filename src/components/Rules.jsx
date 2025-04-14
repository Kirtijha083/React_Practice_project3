import styled from "styled-components";

export default function Rules(){
    return(
        <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
        <p>Select any number, Click on dice image.</p>
          <p>
            After click on dice if selected number is equal to dice number you
            will get same point as dice. If you get wrong guess then 2 point will be dedcuted... </p>
        </div>
      </RulesContainer>
    );
}


const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 10px;
  }
`;