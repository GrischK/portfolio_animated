import styles from "../assets/css/Button.module.css"
import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    variant: String;
}

export default function Button({children, variant}: ButtonProps) {
    const buttonClass = variant ? `${styles.btn} ${styles[`btn-${variant}`]}` : styles.btn;

    return (
        <button className={buttonClass}>
            {children}
        </button>
    )
}