import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./ResultPage.css";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ResultItem from "../components/ResultItem";

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
                    <h1>{"Alcohol-Variable"}</h1>
                </div>

                <div className="result-section-item">
                    <img src="" alt="image_url" />
                </div>

                <div className="result-section-form">
                    <Button
                        variant="primary"
                        type="submit"
                        className="btn-common btn-result"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        다시 할래요
                    </Button>

                    <Button variant="primary" type="submit" className="btn-common btn-result" onClick={() => {}}>
                        구매하러 가기
                    </Button>

                    <Button variant="primary" type="submit" className="btn-common btn-result" onClick={() => {}}>
                        결과 공유하기
                    </Button>
                </div>

                <div style={{ height: "100px" }}></div>

                <div className="result-section-item">
                    <div className="graph-container">
                        <Title kr_title="결과" en_title="Result"></Title>
                        <div className="result-item-wrapper">
                            {Object.entries(questionMain).map((key, value) => {
                                console.log(key[1] / 400);
                                return (
                                    <div className="result-item-container">
                                        <p>{key[0]}</p>
                                        <div className="result-item-graph-container">
                                            <div className="result-item-graph" style={{ transform: `scale(${key[1] / 400}, 1)` }}></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="graph-item"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
