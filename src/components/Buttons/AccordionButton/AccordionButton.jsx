import React from "react";
import { Button } from "../";
import "./AccordionButton.css";

export const AccordionButton = ({
    title = "",
    isExpanded = false,
    small = false,
    className,
    ...props
}) => {
    return (
        <Button className={`accordion-button ${className}`} {...props}>
            {small ? (
                <>
                    <h3 className="sidebar-accordion__title">{title}</h3>
                    <h3 className="sidebar-accordion__icon">
                        {isExpanded ? "-" : "+"}
                    </h3>
                </>
            ) : (
                <>
                    <h2 className="sidebar-accordion__title">{title}</h2>
                    <h2 className="sidebar-accordion__icon">
                        {isExpanded ? "-" : "+"}
                    </h2>
                </>
            )}
        </Button>
    );
};
