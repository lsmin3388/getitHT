import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/form" element={<FormPage></FormPage>}></Route>
                <Route path="/question" element={<QuestionPage></QuestionPage>}></Route>
            </Routes>
        </div>
    );
}

export default App;
