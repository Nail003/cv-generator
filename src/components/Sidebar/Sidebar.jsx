import React, { useState } from "react";
import { Button, Collapser, FormEducation, FormPersonal } from "../";
import "./sidebar.css";

const Sidebar = () => {
    const [educationForms, setEducationForms] = useState([]);

    function handleAddEducation() {
        setEducationForms((prev) => [...prev, false]);
    }

    return (
        <div className="sidebar">
            <Collapser title="Personal Info">
                <FormPersonal />
            </Collapser>
            <Collapser title="Education">
                <Button onClick={handleAddEducation}>Add Education</Button>
                {educationForms.map(() => (
                    <FormEducation />
                ))}
            </Collapser>
            <Collapser title="Work Experience"></Collapser>
        </div>
    );
};

export default Sidebar;
