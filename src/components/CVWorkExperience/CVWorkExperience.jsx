import React from "react";
import "./CVWorkExperience.css";
import { CVCard } from "../Cards";

export const CVWorkExperience = ({ workExperience }) => {
    const { companyName, position, responsibility, startDate, endDate } =
        workExperience;
    return (
        <CVCard>
            <div>
                <h2 className="cv-work-experience__position">{position}</h2>
                <h3 className="cv-work-experience__company">{companyName}</h3>
            </div>
            <p className="cv-work-experience__responsibility">
                {responsibility}
            </p>
            <p className="cv-work-experience__date">
                {startDate} to {endDate ? endDate : "Present"}
            </p>
        </CVCard>
    );
};
