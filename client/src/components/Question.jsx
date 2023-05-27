import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import { increaseClear, increaseFruit, increaseRaw, increaseSoju } from "../store/questionSlice";

import "./Question.css";

export default function Question({ type, index, qString, qWeightArray }) {
    return (
        <div className="question-wrapper">
            <div className="question-container">
                <h3>{qString}</h3>
                <div key={`inline-radio`} className={`question-radio-container-${type} question-radio-container`}>
                    <input type="radio" name={`question${index}`} value="0" id={`q${index}-0`} />
                    <input type="radio" name={`question${index}`} value="1" id={`q${index}-1`} />
                    <input type="radio" name={`question${index}`} value="2" id={`q${index}-2`} />
                    <input type="radio" name={`question${index}`} value="3" id={`q${index}-3`} />
                    <input type="radio" name={`question${index}`} value="4" id={`q${index}-4`} />
                </div>
                <div className="label-container">
                    <p>매우 아니다</p>
                    <p>아니다</p>
                    <p>보통이다</p>
                    <p>그렇다</p>
                    <p>매우 그렇다</p>
                </div>
            </div>
        </div>
    );
}
