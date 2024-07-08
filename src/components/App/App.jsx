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
    const [educationList, setEducationList] = useState([]);

    return (
        <div className="app">
            <Sidebar
                {...{
                    personalInfo,
                    setPersonalInfo,
                    workExperiences,
                    setWorkExperiences,
                    educationList,
                    setEducationList,
                }}
            />
            <CV {...{ personalInfo, workExperiences, educationList }} />
        </div>
    );
};

export default App;
