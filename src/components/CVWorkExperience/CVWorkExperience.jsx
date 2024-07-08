import React from "react";
import "./CVWorkExperience.css";
import { CVCard } from "../Cards";

export const CVWorkExperience = ({ workExperience }) => {
    const { companyName, position, responsibility, startDate, endDate } =
        workExperience;
    return (
        <CVCard>
            <div className="cv-card__divider">
                <h2 className="cv-card__text">{position}</h2>
                <h3 className="cv-card__text cv-work-experience__company">
                    {companyName}
                </h3>
            </div>
            <p className="cv-card__text">{responsibility}</p>
            <p className="cv-card__text cv-card__date">
                {startDate} to {endDate ? endDate : "Present"}
            </p>
        </CVCard>
    );
};
