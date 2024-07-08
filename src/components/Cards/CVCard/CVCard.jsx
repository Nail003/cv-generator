import React from "react";
import { CardFilled } from "../";
import "./CVCard.css";

export const CVCard = ({ children }) => {
    return <CardFilled className="cv-card">{children}</CardFilled>;
};
