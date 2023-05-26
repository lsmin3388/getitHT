import React from "react";

import Question from "../components/Question";
import questionClear from "../assets/questionClear";

export default function QuestionPageClear() {
    return (
        <>
            <div className="question-section-wrapper">
                <h1>CLEAR</h1>
                {questionClear.map((element, index) => {
                    return <Question index={index} qString={questionClear[index]["qString"]} qWeightArray={questionClear[index]["qWeight"]}></Question>;
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
