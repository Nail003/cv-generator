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

    return (
        <div className="app">
            <Sidebar {...{ personalInfo, setPersonalInfo }} />
            <CV {...{ personalInfo }} />
        </div>
    );
};

export default App;
