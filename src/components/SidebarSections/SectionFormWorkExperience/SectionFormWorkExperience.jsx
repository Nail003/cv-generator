import React, { useState } from "react";
import { Button } from "../..";
import { FormWork } from "../../Forms";
import { SectionSidebar } from "../";
import "./sectionFormWorkExperience.css";

const SectionFormWorkExperience = () => {
    const [workForms, setWorkForms] = useState([]);

    function handleAddWork() {
        setWorkForms((prev) => [...prev, false]);
    }
    return (
        <SectionSidebar>
            <Button onClick={handleAddWork}>Add Work</Button>
            {workForms.map(() => (
                <FormWork />
            ))}
        </SectionSidebar>
    );
};

export default SectionFormWorkExperience;
