import React from "react";
import { useEffect } from "react";
import Question from "../components/Question";
import axios from "axios";
import questionClear from "../assets/questionClear";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    increaseAlcohol,
    increaseBodyTaste,
    increaseFlowery,
    increaseLinger,
    increaseNutty,
    increaseScent,
    increaseSweet,
    increaseSweety,
    initializeRaw,
    increaseSour,
    increaseBitter,
    increaseSparkle,
} from "../store/questionMainSlice";
import { BASE_URL } from "../env/baseurl";

export default function QuestionPageClear() {
    const dispatch = useDispatch();
    const questionMain = useSelector((state) => state.questionMain.value);
    let navigate = useNavigate();

    function increaseWeight(type, weight) {
        switch (type) {
            case "scent":
                dispatch(increaseScent(weight));
                break;
            case "sweet":
                dispatch(increaseSweet(weight));
                break;
            case "linger":
                dispatch(increaseLinger(weight));
                break;
            case "body_taste":
                dispatch(increaseBodyTaste(weight));
                break;
            case "alcohol":
                dispatch(increaseAlcohol(weight));
                break;
            case "sweety":
                dispatch(increaseSweety(weight));
                break;
            case "nutty":
                dispatch(increaseNutty(weight));
                break;
            case "flowery":
                dispatch(increaseFlowery(weight));
                break;
            case "sour":
                dispatch(increaseSour(weight));
                break;
            case "bitter":
                dispatch(increaseBitter(weight));
                break;
            case "sparkle":
                dispatch(increaseSparkle(weight));
                break;
        }
    }

    function onNextBtnClick() {
        // console.log("onNextBtnClick");
        let questionContainers = document.querySelectorAll(".question-radio-container-clear");

        for (let questionIndex = 0; questionIndex < questionContainers.length; questionIndex++) {
            for (let radioIndex = 0; radioIndex < questionContainers[questionIndex].childNodes.length; radioIndex++) {
                if (questionContainers[questionIndex].childNodes[radioIndex].checked) {
                    increaseWeight(questionClear[questionIndex]["qWeight"][radioIndex]["type"], questionClear[questionIndex]["qWeight"][radioIndex]["weight"]);
                }
            }
        }
        // redux store questionRawSlice 의 state 가 변경되면
        // useEffect(() => {}, [questionRaw]) 이 다음으로 실행됨
        navigate("/result");
    }
    function onPrevBtnClick() {
        dispatch(initializeRaw());
        navigate("/question");
    }

    useEffect(() => {
        // axios post
        let serverData = {};

        for (const taste in questionMain) {
            serverData[taste] = Number(questionMain[taste]) / 4;
        }

        axios({
            method: "post",
            url: "/api/characters/create/1",
            data: serverData,
            baseURL: "http://localhost:8080",
        })
            //.post("/api/characters/create/1", serverData, { baseURL: BASE_URL })
            .then(() => {
                console.log("POST : request success!");
                navigate("/result");
            })
            .catch(() => {
                console.log("POST : request fail!");
                // navigate("/result");
            })
            .finally(() => {
                console.log(questionMain);
                // console.log(serverData);
                // navigate("/result");
            });
    }, [questionMain]);

    useEffect(() => {
        dispatch(initializeRaw());
        document.querySelector("#btn-result-prev").addEventListener("click", onPrevBtnClick);
        document.querySelector("#btn-result-next").addEventListener("click", onNextBtnClick);
        return () => {
            // document.querySelector("#btn-result-prev").removeEventListener("click", onPrevBtnClick);
            // document.querySelector("#btn-result-next").removeEventListener("click", onNextBtnClick);
        };
    }, []);

    return (
        <>
            <div className="question-section-wrapper">
                {questionClear.map((element, index) => {
                    return <Question type="clear" index={index} qString={questionClear[index]["qString"]} qWeightArray={questionClear[index]["qWeight"]}></Question>;
                })}
            </div>
            <div className="question-control-wrapper">
                <div className="question-control-container">
                    <button id="btn-result-prev" className="btn-question btn-question-prev">
                        이전
                    </button>
                    <button id="btn-result-next" className="btn-question btn-question-next">
                        다음
                    </button>
                </div>
            </div>
        </>
    );
}
