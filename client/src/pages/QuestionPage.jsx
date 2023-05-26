import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseClear, increaseFruit, increaseRaw, increaseSoju, initalizeStates } from "../store/questionSlice";
import axios from "axios";

import Question from "../components/Question";

import "./QuestionPage.css";

import questionDefault from "../assets/question";
import { initializeRaw } from "../store/questionMainSlice";

export default function QuestionPage() {
    const dispatch = useDispatch();
    const question = useSelector((state) => state.question.value);
    let navigate = useNavigate();
    // const dispatch = useDispatch();

    function increaseWeight(type, weight) {
        // console.log(`increaseWeight Called!!!!!!!!!!!!!${type}, ${weight}`);
        switch (type) {
            case "raw":
                dispatch(increaseRaw(weight));
                break;
            case "clear":
                dispatch(increaseClear(weight));
                break;
            case "soju":
                dispatch(increaseSoju(weight));
                break;
            case "fruit":
                dispatch(increaseFruit(weight));
                break;
        }
    }

    function onNextBtnClick() {
        let questionContainers = document.querySelectorAll(".question-radio-container-default");

        for (let questionIndex = 0; questionIndex < questionContainers.length; questionIndex++) {
            for (let radioIndex = 0; radioIndex < questionContainers[questionIndex].childNodes.length; radioIndex++) {
                // console.log(`q${questionIndex}-${radioIndex} : ${questionContainers[questionIndex].childNodes[radioIndex].checked}`);
                if (questionContainers[questionIndex].childNodes[radioIndex].checked) {
                    // console.log(questionDefault[questionIndex]["qWeight"][radioIndex]["type"]);
                    // console.log(questionDefault[questionIndex]["qWeight"][radioIndex]["weight"]);
                    increaseWeight(questionDefault[questionIndex]["qWeight"][radioIndex]["type"], questionDefault[questionIndex]["qWeight"][radioIndex]["weight"]);
                }
            }
        }
        // redux store questionSlice state 가 변경되면
        // useEffect(() => {}, [question]) 이 다음으로 실행됌
    }

    function onPrevBtnClick() {
        console.log("prev");
        dispatch(initalizeStates());
    }

    useEffect(() => {
        // questionSlice state 변경 이후 (다음 버튼 클릭시)
        axios
            .post("/api/members/alcoholtype_save/1", question)
            .then(() => {
                // 가장 가중치 높은 페이지로 navigate
                let maxWeight = { type: "", weight: 0 };

                for (const q in question) {
                    console.log(q, question[q]);
                    if (maxWeight["weight"] < question[q]) {
                        maxWeight["type"] = q;
                        maxWeight["weight"] = question[q];
                    }
                }

                if (maxWeight["type"] != "") navigate(`/${maxWeight["type"]}`);
            })
            .catch(() => {
                console.log("POST : request failed!");
            })
            .finally(() => {
                // 가장 가중치 높은 페이지로 navigate
                let maxWeight = { type: "", weight: 0 };

                for (const q in question) {
                    console.log(q, question[q]);
                    if (maxWeight["weight"] < question[q]) {
                        maxWeight["type"] = q;
                        maxWeight["weight"] = question[q];
                    }
                }

                if (maxWeight["type"] != "") navigate(`/question_${maxWeight["type"]}`);
            });
    }, [question]);

    useEffect(() => {
        dispatch(initializeRaw());
        document.querySelector(".btn-question-next").addEventListener("click", onNextBtnClick);
        document.querySelector(".btn-question-prev").addEventListener("click", onPrevBtnClick);

        return () => {
            // document.querySelector(".btn-question-next").removeEventListener("click", onNextBtnClick);
            // document.querySelector(".btn-question-prev").removeEventListener("click", onPrevBtnClick);
        };
    }, []);

    return (
        <>
            <div className="question-section-wrapper">
                {questionDefault.map((element, index) => {
                    return <Question type="default" index={index} qString={questionDefault[index]["qString"]} qWeightArray={questionDefault[index]["qWeight"]}></Question>;
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
