import './App.css'
import Hero from "./pages/Hero.tsx";
import WhoAmI from "./pages/WhoAmI.tsx";
import Layout from "./components/Layout.tsx";
import {AnimatePresence} from "framer-motion";

function App() {

    return (
        <>
            <AnimatePresence>
                <Layout>
                    <Hero/>
                    <WhoAmI/>
                    <div style={{height: "200vh"}}></div>
                </Layout>
            </AnimatePresence>
        </>
    )
}

export default App
