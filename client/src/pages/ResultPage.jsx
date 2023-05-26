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

    function GetRecommend() {
        axios.post("https://alcoapi.fly.dev/recommend");
    }

    useEffect(() => {
        let maxWeight = { type: "", weight: 0 };

        for (const q in question) {
            console.log(q, question[q]);
            if (maxWeight["weight"] < question[q]) {
                maxWeight["type"] = q;
                maxWeight["weight"] = question[q];
            }
        }
        console.log(maxWeight);
    }, []);

    return (
        <div className="result-section-wrapper">
            <div className="result-section-container">
                {Object.entries(question).map((key, value) => {
                    return <h1>{`${key}`}</h1>;
                })}

                {Object.entries(questionMain).map((key, value) => {
                    return <h1>{`${key}`}</h1>;
                })}
            </div>
        </div>
    );
}
