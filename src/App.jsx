import StartGame from "./Components/StartGame/StartGame"
import './App.css';
import { useState } from "react";
import Gameplay from "./Components/Gameplay/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState (false)
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <>
      {isGameStarted ? <Gameplay/> : <StartGame toggle={toggleGamePlay}/> }
    </>
  )
}

export default App
