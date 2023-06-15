import styles from "../assets/css/Home.module.css";
import {motion} from "framer-motion";
import {animationOne, transition, revealTextFromBottom, revealTransition, animationTextTwo} from "../animations";
import Dog from "../assets/images/dog.png";
import Button from "../components/Button.tsx";

export default function Hero() {
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
                <div>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={revealTextFromBottom}
                        transition={revealTransition}
                    >
                        Développeur web
                    </motion.h1>
                </div>
                <div>
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={revealTextFromBottom}
                        transition={revealTransition}
                    >
                        Frontend
                    </motion.h2>
                </div>
                <div>
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={revealTextFromBottom}
                        transition={revealTransition}
                    >
                        Backend
                    </motion.h2>
                </div>
            </div>
            <div className={styles.home_content}>
                <motion.p
                    initial="textOut"
                    animate="textIn"
                    variants={animationTextTwo}
                    transition={{duration: 0.5, delay: 1.5}}
                    className={styles.home_text}
                >
                    Bienvenue sur mon portfolio. Grischka Gorski, développeur web & web
                    mobile, basé à Bordeaux.<br/>"Fais un travail que tu aimes et tu ne
                    travailleras
                    jamais".
                </motion.p>
                <motion.div
                    initial="out"
                    animate="in"
                    variants={animationOne}
                    transition={{delay: 1.5, duration: 3}}
                >
                    <Button variant="primary">Contactez moi</Button>
                </motion.div>
            </div>
        </div>
    )
}