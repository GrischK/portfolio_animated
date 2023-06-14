import styles from "../assets/css/Home.module.css";
import {motion} from "framer-motion";
import {animationOne, transition} from "../animations";
import Dog from "../assets/images/dog.png";
import Button from "./Button.tsx";

export default function Home() {
    return (
        <div
            className={styles.hero}
        >
            <motion.img
                initial="out"
                animate="in"
                exit="out"
                variants={animationOne}
                transition={transition}
                className={styles.background} src={Dog} alt="husky"
            />
            <div className={styles.titleContainer}>
                <h1>Developpeur web</h1>
                <h2>Frontend</h2>
                <h2>Backend</h2>
            </div>
            <div className={styles.home_content}>
                <p className={styles.home_text}>Bienvenue sur mon portfolio. Grischka Gorski, développeur web & web
                    mobile,
                    frontend & backend basé à Bordeaux. Mon crédo "Fais un travail que tu aimes et tu ne travailleras
                    jamais".
                </p>
                <Button variant="primary">Contactez moi</Button>
            </div>
        </div>
    )
}