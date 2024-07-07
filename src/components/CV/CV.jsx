import React from "react";
import "./CV.css";
import { CVHeader } from "../CVHeader/CVHeader";

export const CV = ({ personalInfo }) => {
    return (
        <div className="cv-container">
            <div className="cv">
                <div className="cv__left">
                    <CVHeader {...{ personalInfo }} />
                </div>
                <div className="cv__right"></div>
            </div>
        </div>
    );
};
