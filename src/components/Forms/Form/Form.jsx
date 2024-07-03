import React from "react";
import "./form.css";

const Form = ({ children, className, ...props }) => {
    return (
        <form action="" className={`form ${className}`} {...props}>
            {children}
        </form>
    );
};

export default Form;
