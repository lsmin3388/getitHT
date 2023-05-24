import React from "react";

import { Link } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link>Alch-holic</Link>
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
