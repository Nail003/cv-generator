import React, { useState } from "react";
import { Button, FormWork } from "../";
import "./sectionFormWorkExperience.css";

const SectionFormWorkExperience = () => {
    const [workForms, setWorkForms] = useState([]);

    function handleAddWork() {
        setWorkForms((prev) => [...prev, false]);
    }
    return (
        <section className="section-form-work-experience">
            <Button onClick={handleAddWork}>Add Work</Button>
            {workForms.map(() => (
                <FormWork />
            ))}
        </section>
    );
};

export default SectionFormWorkExperience;
