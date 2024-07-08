import React, { useState } from "react";
import "./App.css";
import { CV, Sidebar } from "..";

const initialPersonalInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
};

const App = () => {
    const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
    const [workExperiences, setWorkExperiences] = useState([]);

    return (
        <div className="app">
            <Sidebar
                {...{
                    personalInfo,
                    setPersonalInfo,
                    workExperiences,
                    setWorkExperiences,
                }}
            />
            <CV {...{ personalInfo, workExperiences }} />
        </div>
    );
};

export default App;
