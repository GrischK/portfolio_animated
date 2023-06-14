import styles from "../assets/css/Button.module.css"

export default function Button({children, variant}) {
    const buttonClass = variant ? `${styles.btn} ${styles[`btn-${variant}`]}` : styles.btn;

    return (
        <button className={buttonClass}>
            {children}
        </button>
    )
}