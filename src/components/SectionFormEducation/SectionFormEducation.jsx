import React, { useState } from "react";
import { Button, FormEducation } from "../";
import "./sectionFormEducation.css";

const SectionFormEducation = () => {
    const [educationForms, setEducationForms] = useState([]);

    function handleAddEducation() {
        setEducationForms((prev) => [...prev, false]);
    }

    return (
        <section className="section-form-education">
            <Button onClick={handleAddEducation}>Add Education</Button>
            {educationForms.map(() => (
                <FormEducation />
            ))}
        </section>
    );
};

export default SectionFormEducation;
