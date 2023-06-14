import NavBar from "./NavBar.tsx";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    )
}