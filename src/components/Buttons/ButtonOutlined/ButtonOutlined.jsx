import React from "react";
import "./ButtonOutlined.css";
import { Button } from "../";

export const ButtonOutlined = ({ children, ...props }) => {
    return (
        <Button className="button-outlined" {...props}>
            {children}
        </Button>
    );
};
