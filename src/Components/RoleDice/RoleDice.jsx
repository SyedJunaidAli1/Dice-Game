import styles from "./RoleDice.module.css"

const RoleDice = ({ currentDice, roleDice }) => {
   
    return (
        <>
            <div className={styles.Dicecontainer}>
                <div className={styles.dice} onClick={roleDice} >
                    <img src={`/Images/Dice/dice_${currentDice}.png`} alt="dice 1" />
                </div>
                <p className={styles.p_tag}>Click on Dice to roll</p>
            </div>

        </>
    )
}

export default RoleDice