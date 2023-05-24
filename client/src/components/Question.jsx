import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Question.css";

export default function Question(props) {
    return (
        <div className="question-container container">
            <Form.Group className="form-question">
                <Form.Label>{props.question}</Form.Label>
                <br></br>
                <div className="form-question-container">
                    <Form.Check inline label="매우그렇지않다" name="form-radio-sex" type="radio" id="form-sex-male" />
                    <Form.Check inline label="그렇지않다" name="form-radio-sex" type="radio" id="form-sex-female" />
                    <Form.Check inline label="보통이다" name="form-radio-sex" type="radio" id="form-sex-female" />
                    <Form.Check inline label="그렇다" name="form-radio-sex" type="radio" id="form-sex-female" />
                    <Form.Check inline label="매우그렇다" name="form-radio-sex" type="radio" id="form-sex-female" />
                </div>
            </Form.Group>
        </div>
    );
}
