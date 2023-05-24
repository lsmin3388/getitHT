import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./FormPage.css";

export default function FormPage() {
    let navigate = useNavigate();

    return (
        <div className="form-wrapper wrapper">
            <div className="form-container container">
                <Form>
                    <div className="input-container">
                        <Form.Group className="form-input-name form-group">
                            <Form.Label>이름</Form.Label>
                            <Form.Control type="text" placeholder="이름을 입력하세요" />
                        </Form.Group>

                        <Form.Group className="form-input-sex form-group">
                            <Form.Label>성별</Form.Label>
                            <br></br>
                            <Form.Check inline label="남성" name="form-radio-sex" type="radio" id="form-sex-male" />
                            <Form.Check inline label="여성" name="form-radio-sex" type="radio" id="form-sex-female" />
                        </Form.Group>

                        <Form.Group className="form-input-region form-group">
                            <Form.Label htmlFor="form-dropdown-region">거주 지역</Form.Label>
                            <Form.Select id="form-dropdown-region">
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
                            <Form.Label htmlFor="form-dropdown-region">선호 주종</Form.Label>
                            <Form.Select id="form-dropdown-region">
                                <option>선호 주종을 선택해주세요</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    <div className="btn-container">
                        <Button
                            variant="primary"
                            type="submit"
                            className="btn-common"
                            onClick={() => {
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
                                navigate("/question");
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
