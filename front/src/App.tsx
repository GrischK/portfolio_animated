import './App.css'
import Home from "./components/Home.tsx";
import Layout from "./components/Layout.tsx";
import {AnimatePresence} from "framer-motion";

function App() {

    return (
        <>
            <AnimatePresence>
                <Layout>
                    <Home/>
                    <div style={{height: "300vh"}}></div>
                </Layout>
            </AnimatePresence>
        </>
    )
}

export default App
