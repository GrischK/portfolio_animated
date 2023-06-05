import styles from "../assets/css/Home.module.css";
import Stars from "../assets/images/stars_sky.jpg";

export default function Home() {
    return (
        <div className={styles.home}>
            <img src={Stars} alt="sky with stars"/>
        </div>
    )
}