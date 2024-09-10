import styles from "./StartGame.module.css"
const StartGame = ({ toggle }) => {
    return (
        <>
            <div className={styles.container}>
                <img src="./Images/dices 1.png" alt="" />
                <div className={styles.content}>
                    <h1 className={styles.heading}>DICE GAME</h1>
                    <button onClick={toggle} className="btn">Play Now</button>
                </div>
            </div>
        </>
    )
}

export default StartGame 