import React from "react";
import "./sectionSidebar.css";

const SectionSidebar = ({ children, className, ...props }) => {
    return (
        <section className={`section-sidebar ${className}`} {...props}>
            {children}
        </section>
    );
};

export default SectionSidebar;
