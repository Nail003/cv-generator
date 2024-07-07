import React from "react";
import "./Sidebar.css";
import { SidebarAccordion } from "../Accordions";
import { PersonalInfoForm } from "../Forms";

export const Sidebar = ({ ...props }) => {
    return (
        <div className="sidebar">
            <SidebarAccordion title="Personal Info">
                <PersonalInfoForm {...props} />
            </SidebarAccordion>
        </div>
    );
};
