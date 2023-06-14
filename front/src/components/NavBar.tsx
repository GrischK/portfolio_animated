import styles from "../assets/css/NavBar.module.css"
import {motion} from "framer-motion";
import {animationLine, transitionNavBarLine} from "../animations";
import {useEffect, useState} from "react";

export default function NavBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            let blurValue = 0;
            if (scrollPosition <= 100) {
                blurValue = (scrollPosition / 100) * 10; // Flou progressif jusqu'à 10px
            } else {
                blurValue = 10; // Flou fixe de 10px
            }
            setScrollProgress(blurValue);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.nav className={styles.nav_bar}
                    style={{willChange: "backdrop-filter", backdropFilter: `blur(${scrollProgress}px)`}}>
            <motion.div
                initial="in"
                animate="out"
                variants={animationLine}
                transition={transitionNavBarLine}
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
        </motion.nav>
    )
}