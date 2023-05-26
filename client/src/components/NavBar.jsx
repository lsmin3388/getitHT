import React from "react";

import { Link, useNavigate } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
    let navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Alch-holic</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/form">검사하기</Link>
                </li>
            </ul>
        </nav>
    );
}
