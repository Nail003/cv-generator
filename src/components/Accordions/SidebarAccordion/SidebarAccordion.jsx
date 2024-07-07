import React, { useState } from "react";
import "./SidebarAccordion.css";

export const SidebarAccordion = ({ title = "", children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleAccordion() {
        setIsExpanded((prev) => !prev);
    }

    return (
        <div className="sidebar-accordion">
            <button
                className="sidebar-accordion__button"
                onClick={toggleAccordion}
            >
                <h1 className="sidebar-accordion__title">{title}</h1>
                <h1 className="sidebar-accordion__icon">
                    {isExpanded ? "-" : "+"}
                </h1>
            </button>
            <div
                className={`sidebar-accordion__content-container ${
                    isExpanded ? "expand" : "collapse"
                }`}
            >
                {" "}
                {children}
            </div>
        </div>
    );
};
