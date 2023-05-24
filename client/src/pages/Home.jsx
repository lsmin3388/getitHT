import React from "react";

import "./Home.css";

export default function Home() {
    return (
        <div className="home-wrapper">
            <div className="home-container">
                <div className="home-title-container">
                    <h1>당신에게 맞는 술을</h1>
                    <h1>추천해드립니다</h1>
                </div>
                <button>검사하기</button>
            </div>
        </div>
    );
}
