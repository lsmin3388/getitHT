import React from "react";

import Question from "../components/Question";
import questionFruit from "../assets/questionFruit";

export default function QuestionPageFruit() {
    return (
        <>
            <div className="question-section-wrapper">
                <h1>FRUIT</h1>
                {questionFruit.map((element, index) => {
                    return <Question index={index} qString={questionFruit[index]["qString"]} qWeightArray={questionFruit[index]["qWeight"]}></Question>;
                })}
            </div>
            <div className="question-control-wrapper">
                <div className="question-control-container">
                    <button className="btn-question btn-question-prev">이전</button>
                    <button className="btn-question btn-question-next">다음</button>
                </div>
            </div>
        </>
    );
}
