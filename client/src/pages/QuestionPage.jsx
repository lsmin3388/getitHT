import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increaseRaw, increaseClear, increaseSoju, increaseFruit } from "../store/questionSlice";

import Question from "../components/Question";

import "./QuestionPage.css";

let qWeight = [
    {
        type: "raw",
        weight: 4,
    },
    {
        type: "clear",
        weight: 2,
    },
    {
        type: "soju",
        weight: 4,
    },
    {
        type: "fruit",
        weight: 4,
    },
    {
        type: "raw",
        weight: 4,
    },
];

export default function QuestionPage() {
    const question = useSelector((state) => state.question.value);
    // const dispatch = useDispatch();

    return (
        <div className="question-section-wrapper">
            <div>
                <h1>{`raw : ${question.raw}`}</h1>
                <h1>{`clear : ${question.clear}`}</h1>
                <h1>{`soju : ${question.soju}`}</h1>
                <h1>{`fruit : ${question.fruit}`}</h1>
            </div>
            <Question index={0} qString={"질문예시1"} qWeightArray={qWeight}></Question>
            <Question index={1} qString={"질문예시2"} qWeightArray={qWeight}></Question>
        </div>
    );
}
