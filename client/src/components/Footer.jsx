import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faBusinessTime, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <p>Contact</p>
            <p>010-0000-0000</p>
            <div className="footer-container">
                <div className="footer-item"></div>
                <div className="footer-item"></div>
                <div className="footer-item"></div>
            </div>
        </footer>
    );
}
