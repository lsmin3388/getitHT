import React from "react";

import "./Form.css";

export default function Form() {
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <form className="form" action="">
                    <div className="form-item">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" />
                    </div>

                    <div className="form-item">
                        <label htmlFor="name">나이</label>
                        <input type="text" id="name" />
                    </div>

                    <div className="form-item">
                        <label htmlFor="name">나이</label>
                        <input type="text" id="name" />
                    </div>
                </form>
            </div>
        </div>
    );
}
