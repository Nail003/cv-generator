import React, { useState } from "react";
import { AccordionButton } from "../../Buttons";
import { AccordionContainer } from "../../Containers";
import "./FormAccordion.css";

export const FormAccordion = ({ title = "", children }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    function toggleAccordion(e) {
        e.preventDefault();
        setIsExpanded((prev) => !prev);
    }

    return (
        <div className="form-accordion">
            <AccordionButton
                onClick={toggleAccordion}
                small
                {...{ title, isExpanded }}
            />
            <AccordionContainer {...{ isExpanded }}>
                {children}
            </AccordionContainer>
        </div>
    );
};
