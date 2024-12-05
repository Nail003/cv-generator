import React from "react";
import "./ButtonOutlined.css";
import { Button } from "../";

export const ButtonOutlined = ({ children, className, ...props }) => {
    return (
        <Button className={`button-outlined ${className}`} {...props}>
            {children}
        </Button>
    );
};
