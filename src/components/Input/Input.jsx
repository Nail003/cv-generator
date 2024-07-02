import React from "react";
import "./input.css";

const Input = ({ label = "demo", name = "demo", type = "text", ...props }) => {
    return (
        <div className="input">
            <label className="input__label" htmlFor={name}>
                {label}
            </label>
            <input
                className="input__input"
                type={type}
                name={name}
                id={name}
                {...props}
            />
        </div>
    );
};

export default Input;
