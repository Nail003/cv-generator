import React from "react";
import "./CVWorkSection.css";
import { CVWorkExperience } from "../";

export const CVWorkSection = ({ workExperiences }) => {
    return (
        <section className="cv-work-section">
            <h2 className="cv-work-section__title">Work Experience</h2>
            {workExperiences.map((workExperience) => (
                <CVWorkExperience
                    key={workExperience.id}
                    {...{ workExperience }}
                />
            ))}
        </section>
    );
};
