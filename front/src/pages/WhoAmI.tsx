import styles from "../assets/css/WhoAmI.module.css";
import {motion, useScroll, useTransform} from "framer-motion";
import React, {useRef} from "react";
import {stylesWithCssVar} from "../utils/motion";

export default function whoAmI() {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
    const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

    const opacityBorder = useTransform(
        scrollYProgress,
        [0.7, 0.71, 0.72],
        [1, 1, 0]
    );

    const cssVars = {
        "--scale": scale,
        "--opacity-border": opacityBorder,
    } as React.CSSProperties;

    const finalTextOpacity = useTransform(
        scrollYProgress,
        [0.7, 0.71, 0.72, 0.8, 0.9],
        [0, 0, 1, 1, 0]
    );

    const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

    console.log(scale)
    console.log(opacityBorder)
    return (
        <section
            style={stylesWithCssVar({
                opacity: opacitySection,
                "--scale": scale,
                "--opacity-border": opacityBorder,
            })}
            ref={targetRef}
            className={styles.whoAmI_section}
        >
            <div className={styles.whoAmI_container} style={cssVars}>
                <motion.p aria-hidden className={styles.firsText} style={{x: textX, y: "-50%"}}>
                    Qui suis-je ?
                </motion.p>
                <motion.p aria-hidden className={styles.secondText} style={{x: textX, y: "-50%"}}>
                    Qui suis-je ?
                </motion.p>
                <motion.p className={styles.thirdText} style={{
                    opacity: finalTextOpacity,
                    scale: finalTextScale,
                    y: "-50%",
                    x: "-50%",
                }}>
                    Découvrez <br/>
                    le
                </motion.p>
                <span/>
                <span/>
            </div>
        </section>
    )
}