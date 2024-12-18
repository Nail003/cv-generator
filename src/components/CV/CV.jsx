import React from "react";
import { CVHeader } from "../";
import { CVEducationSection, CVWorkSection } from "../Sections";
import "./CV.css";

export const CV = ({ personalInfo, workExperiences, educationList }) => {
    return (
        <div className="cv-container">
            <div className="cv">
                <div className="cv__left">
                    <CVHeader {...{ personalInfo }} />
                </div>
                <div className="cv__right">
                    <CVWorkSection {...{ workExperiences }} />
                    <CVEducationSection {...{ educationList }} />
                </div>
            </div>
        </div>
    );
};
