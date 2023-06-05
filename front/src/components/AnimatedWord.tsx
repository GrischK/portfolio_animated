import {useRef} from "react";
import anime from "animejs/lib/anime.es.js";
import styles from "../assets/css/Home.module.css";

export default function AnimatedWord() {
    const titleRef = useRef(null);
    const lettersRef = useRef([]);

    function handleMouseEnter() {
        animIn();
    }

    function handleMouseLeave() {
        animOut()
    }

    function animIn() {
        anime({
            targets: lettersRef.current,
            translateX: function () {
                return anime.random(-250, 250);
            },
            translateY: function () {
                return anime.random(-250, 250);
            },
            translateZ: function () {
                return anime.random(-2000, 750);
            },
            rotate: function () {
                return anime.random(-250, 250);
            },
            easing: "easeOutCirc",
            duration: 750,
        });
    }

    function animOut() {
        anime({
            targets: "h1 span",
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            rotate: 0,
            easing: "easeInQuad",
            duration: 750
        })
    }

    return (
        <div className={styles.home_title_container}>
            <h1
                className={styles.dev_title}
                ref={titleRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span ref={(el) => (lettersRef.current[0] = el)}>G</span>
                <span ref={(el) => (lettersRef.current[1] = el)}>R</span>
                <span ref={(el) => (lettersRef.current[2] = el)}>I</span>
                <span ref={(el) => (lettersRef.current[3] = el)}>S</span>
                <span ref={(el) => (lettersRef.current[4] = el)}>C</span>
                <span ref={(el) => (lettersRef.current[5] = el)}>H</span>
                <span ref={(el) => (lettersRef.current[6] = el)}>K</span>
                <span ref={(el) => (lettersRef.current[7] = el)}>A</span>
            </h1>
        </div>
    );
}
