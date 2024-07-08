import React from "react";
import "./Sidebar.css";
import { SidebarAccordion } from "../Accordions";
import { PersonalInfoForm, WorkExperienceFormList } from "../Forms";

export const Sidebar = (props) => {
    const {
        personalInfo,
        setPersonalInfo,
        workExperiences,
        setWorkExperiences,
    } = props;
    return (
        <div className="sidebar">
            <SidebarAccordion title="Personal Info">
                <PersonalInfoForm {...{ personalInfo, setPersonalInfo }} />
            </SidebarAccordion>
            <SidebarAccordion title="Work Experience">
                <WorkExperienceFormList
                    {...{ workExperiences, setWorkExperiences }}
                />
            </SidebarAccordion>
        </div>
    );
};
