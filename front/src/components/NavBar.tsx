import styles from "../assets/css/NavBar.module.css"
import {motion} from "framer-motion";
import {animationLine, transition} from "../animations";

export default function NavBar() {
    return (
        <nav className={styles.nav_bar}>
            <motion.div
                initial="in"
                animate="out"
                // exit="out"
                variants={animationLine}
                transition={transition}
                className={styles.nav_bar_line}
            >
            </motion.div>
            <div className={styles.nav_bar_text}>
                <a href="/">
                    <h3>Grischka Gorski</h3>
                </a>
                <h4>Développeur web</h4>
            </div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    )
}