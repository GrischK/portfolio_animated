import NavBar from "./NavBar.tsx";

export default function Layout({children}) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    )
}