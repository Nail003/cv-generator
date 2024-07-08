import React from "react";
import { CVCard } from "../Cards";

export const CVEducation = ({ education }) => {
    const { courseName, schoolName, grade, startDate, endDate } = education;
    return (
        <CVCard>
            <div className="cv-card__divider">
                <h2 className="cv-card__text">{courseName}</h2>
            </div>
            <div>
                <h3 className="cv-card__text">{schoolName}</h3>
                <p className="cv-card__text">Grade {grade}</p>
            </div>
            <p className="cv-card__text cv-card__date">
                {startDate} to {endDate ? endDate : "Present"}
            </p>
        </CVCard>
    );
};
