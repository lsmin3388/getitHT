import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "./ResultPage.css";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
    const dispatch = useDispatch();
    const question = useSelector((state) => state.question.value);
    const questionMain = useSelector((state) => state.questionMain.value);
    let navigate = useNavigate();

    let [modal, setModal] = useState(false);

    function GetRecommend() {
        axios.post("https://alcoapi.fly.dev/recommend");
    }

    function onHoverHandler() {
        setModal(true);
    }

    useEffect(() => {
        let maxWeight = { type: "", weight: 0 };

        for (const q in question) {
            // console.log(q, question[q]);
            if (maxWeight["weight"] < question[q]) {
                maxWeight["type"] = q;
                maxWeight["weight"] = question[q];
            }
        }
        // console.log(maxWeight);

        // document.querySelector(".item-hover").addEventListener("hover", onHoverHandler);

        return () => {
            // document.querySelector(".item-hover").removeEventListener("hover", onHoverHandler);
        };
    }, []);

    return (
        <div className="result-section-wrapper">
            <div className="result-section-container">
                <div className="result-section-item">
                    <h5>당신의 술 취향은</h5>
                </div>

                <div className="result-section-item">
                    <div className="graph-container">
                        <p>sweet</p>
                        <div className="graph-item"></div>
                    </div>
                </div>

                <div className="result-section-form">
                    <button
                        id="btn-restart"
                        className="btn-result btn-highlight"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        다시 할래요
                    </button>
                    <button id="btn-shop" className="btn-result btn-highlight">
                        구매하러 가기
                    </button>
                    <button id="btn-share" className="btn-result btn-highlight">
                        결과 공유하기
                    </button>
                </div>
                {/* {Object.entries(question).map((key, value) => {
                    return <h1>{`${key}`}</h1>;
                })}

                {Object.entries(questionMain).map((key, value) => {
                    return <h1>{`${key}`}</h1>;
                })} */}
            </div>
        </div>
    );
}
