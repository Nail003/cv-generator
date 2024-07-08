import React, { useState } from "react";
import "./SidebarAccordion.css";
import { AccordionButton } from "../../Buttons";
import { AccordionContainer } from "../../Containers";

export const SidebarAccordion = ({ title = "", children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleAccordion() {
        setIsExpanded((prev) => !prev);
    }

    return (
        <div className="sidebar-accordion">
            <AccordionButton
                className="sidebar-accordion__button"
                onClick={toggleAccordion}
                {...{ title, isExpanded }}
            />
            <AccordionContainer
                className="sidebar-accordion__content-container"
                {...{ isExpanded }}
            >
                {children}
            </AccordionContainer>
        </div>
    );
};
