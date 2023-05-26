import React from "react";

export default function QuestionPageSoju() {
    return (
        <>
            <div className="question-section-wrapper">
                <h1>SOJU</h1>
                {/* {questionDefault.map((element, index) => {
            return <Question index={index} qString={questionDefault[index]["qString"]} qWeightArray={questionDefault[index]["qWeight"]}></Question>;
        })} */}
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
