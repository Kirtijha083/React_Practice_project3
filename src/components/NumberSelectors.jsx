import { useState } from "react";
import styled from "styled-components";

export default function NumberSelector() {

  const arrNumber = [1, 2, 3, 4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState();



  return (
    <NumberSelectorContainer>
      {/* <p className="error">{error}</p> */}
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}  // map function ka jb v use krte to ek key value dena hota h (unique value dena pdta h taki usko access krne me esay ho)
            onClick={() => setSelectedNumber(value)}    //jb v function(onClick) me value(value) pass krna hota h to usko call back me pass krna hota h nhi to error aata h
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  /* .error {
    color: red;
  } */
`;

const Box = styled.div`
      height: 65px;
      width: 65px;
      border: 1px solid black;
      display: grid;
      place-items: center;
      font-size: 24px;
      font-weight: 700;
      background-color: ${(props) => (props.isSelected ? "black" : "white")};
      color: ${(props) => (!props.isSelected ? "black" : "white")};
      `;

