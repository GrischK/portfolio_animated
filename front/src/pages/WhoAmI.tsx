import styles from "../assets/css/WhoAmI.module.css";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

export default function whoAmI() {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const textX = useTransform(scrollYProgress, [0.5, 0.7], ["100%", "-200%"]);
    const opacitySection = useTransform(scrollYProgress, [0.35, 0.5, 0.61, 0.65], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.35, 0.8], [1, 0.6]);

    const opacityBorder = useSpring(
        useTransform(scrollYProgress, [0.7, 0.71, 0.72], [1, 1, 0])
    );

    const finalTextOpacity = useTransform(
        scrollYProgress,
        [0.60, 0.62, 0.63, 0.69, 0.71],
        [0, 0, 1, 1, 0]
    );

    const finalTextScale = useTransform(scrollYProgress, [0.63, 0.71], [1, 1.4]);

    console.log(scrollYProgress)
    console.log(opacityBorder)
    return (
        <motion.section
            style={{scale: scale}}
            ref={targetRef}
            className={styles.whoAmI_section}
        >
            <motion.div
                style={{opacity: opacitySection}}
                className={styles.whoAmI_container}>
                <motion.p aria-hidden className={styles.firsText} style={{x: textX, y: "-50%"}}>
                    Qui suis-je ?
                </motion.p>
                <motion.p aria-hidden className={styles.secondText} style={{x: textX, y: "-50%"}}>
                    Qui suis-je ?
                </motion.p>

                <span></span>
                <span></span>
            </motion.div>
            <motion.p className={styles.thirdText} style={{
                opacity: finalTextOpacity,
                scale: finalTextScale,
                y: "-50%",
                x: "-50%",
            }}>
                Découvrez <br/>
                le
            </motion.p>
        </motion.section>
    )
}