import React from "react";

import "./Title.css";

export default function Title(props) {
    return (
        <div className="title-wrapper">
            <h5>{props.kr_title}</h5>
            <h3>{props.en_title}</h3>
        </div>
    );
}
