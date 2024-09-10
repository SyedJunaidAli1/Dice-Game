import { useState } from "react"
import NumberSelector from "../NumberSelector/NumberSelector"
import RoleDice from "../RoleDice/RoleDice"
import TotalScore from "../TotalScore/TotalScore"
import styles from "./Gameplay.module.css"
import Rules from "../Rule/Rule.jsx"


const Gameplay = () => {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error, SetError] = useState("")
    const [ShowRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const roleDice = () => {
        if (!selectedNumber) {
            SetError("You have not selected any number")
            return
        }
        SetError("")
        const randomNumber = generateRandomNumber(1, 7)
        setCurrentDice((prev) => randomNumber)
        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined)
    }
    const resetScore = () => {
        setScore(0)
    }
    return (
        <main>
            <div className={styles.top_section}>
                <TotalScore score={score} />
                <NumberSelector error={error} SetError={SetError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />
            <div className={styles.btns}>
                <button onClick={resetScore} className="btn">Reset Score</button>
                <button onClick={() => setShowRules((prev) => !prev)} className="btn">{ShowRules ? "Hide" : "Show"} Rules</button>
            </div>
            {ShowRules && <Rules/> }
        </main>
    )
}

export default Gameplay