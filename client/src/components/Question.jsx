import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import { increaseClear, increaseFruit, increaseRaw, increaseSoju } from "../store/questionSlice";

import "./Question.css";

export default function Question({ index, qString, qWeightArray }) {
    const question = useSelector((state) => state.question.value);
    const dispatch = useDispatch();

    function onRadioChangeHandler(e) {
        // console.log(this.value);
        console.log(document.querySelector(`input[name='question${index}']:checked`).value);
        increaseWeight(qWeightArray[this.value].type, qWeightArray[this.value].weight);

        //이전에 체크된값에 대한 가중치 제거
    }

    function increaseWeight(type, weight) {
        console.log(type);
        console.log(weight);
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

    useEffect(() => {
        const radioElements = document.querySelectorAll(`input[name='question${index}']`);
        for (const radioElement of radioElements) {
            radioElement.addEventListener("change", onRadioChangeHandler);
        }

        return () => {
            for (const radioElement of radioElements) {
                radioElement.removeEventListener("change", onRadioChangeHandler);
            }
        };
    }, []);

    return (
        <div className="question-wrapper">
            <div className="question-container">
                <h3>{qString}</h3>
                <div key={`inline-radio`} className="question-radio-container">
                    <input type="radio" name={`question${index}`} value="0" />
                    <input type="radio" name={`question${index}`} value="1" />
                    <input type="radio" name={`question${index}`} value="2" />
                    <input type="radio" name={`question${index}`} value="3" />
                    <input type="radio" name={`question${index}`} value="4" />
                </div>
            </div>
        </div>
    );
}
