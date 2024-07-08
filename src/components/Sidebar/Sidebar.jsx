import React from "react";
import "./Sidebar.css";
import { SidebarAccordion } from "../Accordions";
import {
    EducationFormList,
    PersonalInfoForm,
    WorkExperienceFormList,
} from "../Forms";

export const Sidebar = (props) => {
    const {
        personalInfo,
        setPersonalInfo,
        workExperiences,
        setWorkExperiences,
        educationList,
        setEducationList,
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
            <SidebarAccordion title="Education">
                <EducationFormList {...{ educationList, setEducationList }} />
            </SidebarAccordion>
        </div>
    );
};
