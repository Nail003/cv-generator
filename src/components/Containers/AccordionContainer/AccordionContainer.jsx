import React from "react";
import "./AccordionContainer.css";

export const AccordionContainer = ({ isExpanded, className, children }) => {
    return (
        <div
            className={`accordion-container accordion-container--${
                isExpanded ? "expand" : "collapse"
            } ${className}`}
        >
            {children}
        </div>
    );
};
