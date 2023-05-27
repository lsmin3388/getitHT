import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import QuestionPage from "./pages/QuestionPage";
import QuestionPageRaw from "./pages/QuestionPageRaw";
import QuestionPageClear from "./pages/QuestionPageClear";
import QuestionPageSoju from "./pages/QuestionPageSoju";
import QuestionPageFruit from "./pages/QuestionPageFruit";
import ResultPage from "./pages/ResultPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/form" element={<FormPage></FormPage>}></Route>
                <Route path="/question" element={<QuestionPage></QuestionPage>}></Route>
                <Route path="/question_raw" element={<QuestionPageRaw></QuestionPageRaw>}></Route>
                <Route path="/question_clear" element={<QuestionPageClear></QuestionPageClear>}></Route>
                <Route path="/question_soju" element={<QuestionPageSoju></QuestionPageSoju>}></Route>
                <Route path="/question_fruit" element={<QuestionPageFruit></QuestionPageFruit>}></Route>
                <Route path="/result" element={<ResultPage></ResultPage>}></Route>
            </Routes>

            <Footer></Footer>
        </div>
    );
}

export default App;
