import styles from "../assets/css/NavBar.module.css"

export default function NavBar() {
    return (
        <nav className={styles.nav_bar}>
            <div>
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