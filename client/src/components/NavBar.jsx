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
                    <Link>link1</Link>
                </li>
                <li>
                    <Link>link2</Link>
                </li>
            </ul>
        </nav>
    );
}
