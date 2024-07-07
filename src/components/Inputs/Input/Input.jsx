import React from "react";
import "./Input.css";

export const Input = ({ title, name, value, onChange, ...props }) => {
    return (
        <div className="input-container">
            <label className="input-container__label" htmlFor={name}>
                {title}
            </label>
            <input
                className="input-container__input"
                type="text"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};
