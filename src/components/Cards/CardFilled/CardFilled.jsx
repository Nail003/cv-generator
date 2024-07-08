import React from "react";
import "./CardFilled.css";

export const CardFilled = ({ className, children }) => {
    return <div className={`card-filled ${className}`}>{children}</div>;
};
