import React from "react";
import "./CV.css";
import { CVHeader, CVWorkSection } from "../";

export const CV = ({ personalInfo, workExperiences }) => {
    return (
        <div className="cv-container">
            <div className="cv">
                <div className="cv__left">
                    <CVHeader {...{ personalInfo }} />
                </div>
                <div className="cv__right">
                    <CVWorkSection {...{ workExperiences }} />
                </div>
            </div>
        </div>
    );
};
