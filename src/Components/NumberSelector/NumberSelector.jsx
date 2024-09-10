import styles from "./NumberSelector.module.css"

const NumberSelector = ({ selectedNumber, setSelectedNumber, error, SetError }) => {
    const array = [1, 2, 3, 4, 5, 6]
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        SetError("")
    }
    return (
        <>
            <div className={styles.container}>
                <p className={styles.error}>{error}</p>
                <div className={styles.box_number}>
                    {array.map((value, i) => (
                        <div
                            style={selectedNumber === value ? { backgroundColor: "black", color: "white", } : {}}
                            onClick={() => numberSelectorHandler(value)}
                            key={i} className={styles.box}>{value}
                        </div>
                    ))}
                </div>
                <p className={styles.selectedNumber}>Select Number</p>
            </div>
        </>
    )
}

export default NumberSelector