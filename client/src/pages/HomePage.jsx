import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeRaw } from "../store/questionMainSlice";
import { initalizeStates } from "../store/questionSlice";
import Button from "react-bootstrap/esm/Button";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faBusinessTime, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, Form } from "react-bootstrap";

import "./HomePage.css";

export default function HomePage() {
    let navigate = useNavigate();

    return (
        <div>
            <div className="home-page-wrapper">
                <section className="home-section-wrapper">
                    <div className="home-section-container">
                        <h1 style={{ "font-size": "2.4rem", "font-weight": "800" }}>Alco-Holic</h1>
                        <p style={{ "font-size": "0.9rem" }}>은 우리나라의 전통주 시장을 살리고 수집한 데이터를 바탕으로 새로운 전통주 제품 및 개발에 도움을 주는 기업입니다</p>
                    </div>
                    <div className="home-section-container">
                        <img src={process.env.PUBLIC_URL + "/alc-removebg-preview.png"} alt="" />
                    </div>
                </section>
            </div>

            <section className="business-section-wrapper section-wrapper">
                <Title kr_title="비즈니스" en_title="Business"></Title>
                <div className="business-section-container">
                    <div className="business-section-item">
                        <FontAwesomeIcon icon={faBusinessTime} className="item-icon" />
                        <h5>B2C</h5>
                    </div>
                    <div className="business-section-item">
                        <FontAwesomeIcon icon={faPeopleArrows} className="item-icon" />
                        <h5>B2B</h5>
                    </div>
                </div>
                <div className="business-section-container"></div>
            </section>

            <section className="goals-section-wrapper section-wrapper">
                <Title kr_title="우리의 목표" en_title="OurGoals"></Title>
                <div className="goal-section-container">
                    <h4>Our Goal is to Leading a new mainstream industrial culture</h4>
                    <h4>by reviving the traditional liquor market</h4>
                    <h4>and providing data to companies</h4>
                    <p>전통주 시장을 살리고 기업에 데이터를 제공함으로써 새로운 주류 산업문화를 이끌어갑니다</p>
                </div>
            </section>

            <section className="contact-section-wrapper section-wrapper">
                <Title kr_title="컨택" en_title="Contact"></Title>
                <InputGroup className="mb-3 contact-group">
                    <InputGroup.Text className="contact-name">Name</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                </InputGroup>

                <InputGroup className="mb-3 contact-group">
                    <InputGroup.Text className="contact-email">Email</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                </InputGroup>
            </section>
        </div>
    );
}
