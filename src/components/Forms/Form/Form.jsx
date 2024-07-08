import React from "react";
import "./Form.css";

export const Form = ({ children, className, ...props }) => {
    return (
        <form action="" className={`form ${className}`} {...props}>
            {children}
        </form>
    );
};
