import { Outlet } from "react-router";

import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <main style={{ padding: "1rem" }}>
                <Outlet />
            </main>
        </>
    );
};

export default App;
