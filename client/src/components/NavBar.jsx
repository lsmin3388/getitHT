import React from "react";

import { Link, useNavigate } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
    let navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" style={{ "font-size": "1.2rem", "font-weight": "500" }}>
                        Alco-holic
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sub-menu">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="sub-menu">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/shop" className="sub-menu">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/form" className="sub-menu">
                        검사하기
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
