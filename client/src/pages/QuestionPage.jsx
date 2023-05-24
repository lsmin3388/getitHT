import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Question from "../components/Question";
import { useNavigate } from "react-router-dom";

import "./QuestionPage.css";

export default function QuestionPage() {
    let navigate = useNavigate();
    let [questions, setQuestions] = useState(["question1", "question2", "question3"]);

    return (
        <div className="question-wrapper wrapper">
            {questions.map((question, index) => {
                return <Question question={question}></Question>;
            })}

            <Button
                variant="primary"
                type="submit"
                className="btn-highlight btn-outside"
                onClick={() => {
                    navigate("/question/2");
                }}
            >
                다음
            </Button>
        </div>
    );
}
