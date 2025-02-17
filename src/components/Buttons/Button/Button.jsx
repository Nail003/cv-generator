import React from "react";
import "./Button.css";

export const Button = ({ className, children, ...props }) => {
    return (
        <button className={`button ${className}`} {...props}>
            {children}
        </button>
    );
};
