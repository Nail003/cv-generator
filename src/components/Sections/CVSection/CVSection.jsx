import React from "react";
import "./CVSection.css";

export const CVSection = ({ title, children }) => {
    return (
        <section className="cv-section">
            <h2 className="cv-section__title">{title}</h2>
            {children}
        </section>
    );
};
