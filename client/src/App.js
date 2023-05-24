import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/form" element={<Form></Form>}></Route>
            </Routes>
        </div>
    );
}

export default App;
