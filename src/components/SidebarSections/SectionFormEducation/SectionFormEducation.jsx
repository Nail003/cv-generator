import React, { useState } from "react";
import { Button } from "../../";
import { FormEducation } from "../../Forms";
import { SectionSidebar } from "../";
import "./sectionFormEducation.css";

const SectionFormEducation = () => {
    const [educationForms, setEducationForms] = useState([]);

    function handleAddEducation() {
        setEducationForms((prev) => [...prev, false]);
    }

    return (
        <SectionSidebar>
            <Button onClick={handleAddEducation}>Add Education</Button>
            {educationForms.map(() => (
                <FormEducation />
            ))}
        </SectionSidebar>
    );
};

export default SectionFormEducation;
