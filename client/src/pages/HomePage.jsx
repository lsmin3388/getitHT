import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/esm/Button";

import Title from "../components/Title";

import "./HomePage.css";

export default function HomePage() {
    let navigate = useNavigate();

    return (
        <div>
            <section className="home-section-wrapper">
                <div className="home-section-container">
                    <h1>Alco-Holic</h1>
                    <p>은 우리나라의 전통주 시장을 살리고</p>
                    <p>수집한 데이터를 바탕으로 새로운 전통주 제품 및 개발에</p>
                    <p>도움을 주는 기업입니다</p>
                </div>
                <div className="home-section-container">
                    <img src={process.env.PUBLIC_URL + "/alc-removebg-preview.png"} alt="" />
                </div>
            </section>

            <section className="goals-section-wrapper section-wrapper">
                <Title kr_title="우리의 목표" en_title="OurGoals"></Title>
                <div className="goals-section-container"></div>
                <div className="goals-section-container"></div>
            </section>
        </div>
    );
}
