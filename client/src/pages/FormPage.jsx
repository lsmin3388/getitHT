import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { initalizeStates } from "../store/questionSlice";
import { initializeRaw } from "../store/questionMainSlice";
import "./FormPage.css";

import { BASE_URL } from "../env/baseurl";

export default function FormPage() {
    const dispatch = useDispatch();
    const question = useSelector((state) => state.question.value);
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(initalizeStates());
        dispatch(initializeRaw());
    }, []);

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <Form>
                    <div className="input-container">
                        <Form.Group className="form-input-name form-group">
                            <Form.Label>이름</Form.Label>
                            <Form.Control id="form-name" type="text" placeholder="이름을 입력하세요" />
                        </Form.Group>

                        <Form.Group className="form-input-sex form-group">
                            <Form.Label>성별</Form.Label>
                            <br></br>
                            <Form.Check inline label="남성" name="form-radio-sex" type="radio" id="form-sex-male" />
                            <Form.Check inline label="여성" name="form-radio-sex" type="radio" id="form-sex-female" />
                        </Form.Group>

                        <Form.Group className="form-input-region form-group">
                            <Form.Label htmlFor="form-dropdown-region-1">거주 지역</Form.Label>
                            <Form.Select id="form-dropdown-region-1">
                                <option>지역을 선택해주세요</option>
                                <option>서울특별시</option>
                                <option>부산광역시</option>
                                <option>대구광역시</option>
                                <option>인천광역시</option>
                                <option>광주광역시</option>
                                <option>대전광역시</option>
                                <option>울산광역시</option>
                                <option>세종특별자치시</option>
                                <option>경기도</option>
                                <option>강원도</option>
                                <option>충청북도</option>
                                <option>충청남도</option>
                                <option>전라남도</option>
                                <option>경상북도</option>
                                <option>경상남도</option>
                                <option>제주특별자치도</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="form-input-type form-group">
                            <Form.Label htmlFor="form-dropdown-region-2">선호 주종</Form.Label>
                            <Form.Select id="form-dropdown-region-2">
                                <option>선호 주종을 선택해주세요</option>
                                <option>증류주</option>
                                <option>소주</option>
                                <option>탁주</option>
                                <option>과실주</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    <div className="btn-container">
                        <Button
                            variant="primary"
                            type="submit"
                            className="btn-common"
                            onClick={() => {
                                dispatch(initalizeStates());
                                navigate("/");
                            }}
                        >
                            이전
                        </Button>

                        <Button
                            variant="primary"
                            type="submit"
                            className="btn-highlight"
                            onClick={() => {
                                dispatch(initalizeStates());
                                navigate("/question");

                                const dropdownRegion = document.querySelector("#form-dropdown-region-1");
                                const dropdownPrefer = document.querySelector("#form-dropdown-region-2");

                                let data = {
                                    name: null,
                                    age: 23,
                                    sex: document.querySelector("#form-sex-male").checked ? "male" : document.querySelector("#form-sex-female") ? "female" : null,
                                    favorite: dropdownPrefer.options[dropdownPrefer.selectedIndex].text,
                                };
                                console.log(data);

                                axios({
                                    url: "api/members/create",
                                    method: "post",
                                    data: data,
                                    baseURL: BASE_URL,
                                })
                                    .then(() => {
                                        console.log("POST : request success!");
                                    })
                                    .catch(() => {
                                        console.log("POST : request failed!");
                                    });

                                // axios
                                //     .post("/api/members/create", data)
                                //     .then(() => {
                                //         console.log("post success!");
                                //     })
                                //     .catch(() => {
                                //         console.log("post failed!");
                                //     });
                            }}
                        >
                            다음
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
