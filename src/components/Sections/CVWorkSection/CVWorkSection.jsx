import React from "react";
import { CVWorkExperience } from "../..";
import { CVSection } from "../";
import "./CVWorkSection.css";

export const CVWorkSection = ({ workExperiences }) => {
    return (
        <CVSection title="Work Experience">
            {workExperiences.map((workExperience) => (
                <CVWorkExperience
                    key={workExperience.id}
                    {...{ workExperience }}
                />
            ))}
        </CVSection>
    );
};
