import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/esm/Button";

import "./HomePage.css";

export default function HomePage() {
    let navigate = useNavigate();

    return (
        <div className="home-wrapper wrapper">
            <div className="home-container container">
                <div className="home-title-container">
                    <h1>당신에게 맞는 술을</h1>
                    <h1>추천해드립니다</h1>
                </div>
                <Button
                    variant="primary"
                    type="submit"
                    className="btn-highlight"
                    onClick={() => {
                        navigate("/form");
                    }}
                >
                    다음
                </Button>
            </div>
        </div>
    );
}
