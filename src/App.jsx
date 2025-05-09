import './App.css'
import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from 'react';
import GamePlay from './components/GamePlay';

// const Button = styled.button `background-color: black; color: white; padding: 10px`;

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {/*  <Button>This is Styled Component Button</Button> */}
      {/* <StartGame /> */}

      {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    </>
  );
}

export default App
