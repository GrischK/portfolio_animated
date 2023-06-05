import {motion, useScroll, useTransform} from "framer-motion";
import styles from "../assets/css/Home.module.css";
import Stars from "../assets/images/stars_sky.jpg";
import AnimatedWord from "./AnimatedWord.tsx";

export default function Home() {
    const {scrollY} = useScroll();
    const x = useTransform(scrollY, [0, 500], [400, -500])

    return (
        <div className={styles.header}>
            <img className={styles.background} src={Stars} alt="sky with stars"/>
            <motion.h1 style={{x}} className={styles.home_title}>Welcome to my portfolio</motion.h1>
            <AnimatedWord/>
        </div>
    )
}