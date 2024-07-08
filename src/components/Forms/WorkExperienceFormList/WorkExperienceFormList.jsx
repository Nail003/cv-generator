import React from "react";
import { WorkExperienceForm } from "../";
import { ButtonOutlined } from "../../Buttons";
import { v4 as uuid } from "uuid";
import "./WorkExperienceFormList.css";

export const WorkExperienceFormList = (props) => {
    const { workExperiences, setWorkExperiences } = props;

    function onButtonClick(e) {
        e.preventDefault();

        const initialWorkExperience = {
            id: uuid(),
            companyName: "",
            position: "",
            responsibility: "",
            startDate: "",
            endDate: "",
        };
        setWorkExperiences((prev) => [...prev, initialWorkExperience]);
    }

    return (
        <div className="work-experience-form-list">
            <ButtonOutlined onClick={onButtonClick}>Create Job</ButtonOutlined>
            {workExperiences.map((workExperience, index) => (
                <WorkExperienceForm
                    key={workExperience.id}
                    {...{ index, workExperience, setWorkExperiences }}
                />
            ))}
        </div>
    );
};
