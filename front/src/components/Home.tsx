import {motion, useScroll, useTransform} from "framer-motion";
import styles from "../assets/css/Home.module.css";
import Dog from "../assets/images/dog.png";
import AnimatedWord from "./AnimatedWord.tsx";
import Button from "./Button.tsx";

export default function Home() {
    const {scrollY} = useScroll();
    const x = useTransform(scrollY, [0, 500], [400, -500])

    return (
        <div className={styles.header}>
            <img className={styles.background} src={Dog} alt="sky with stars"/>
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