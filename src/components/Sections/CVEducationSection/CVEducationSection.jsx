import React from "react";
import { CVSection } from "../";
import { CVEducation } from "../../";

export const CVEducationSection = ({ educationList }) => {
    return (
        <CVSection title="Education">
            {educationList.map((education) => (
                <CVEducation {...{ education }} />
            ))}
        </CVSection>
    );
};
