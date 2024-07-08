import React from "react";
import { FormList, WorkExperienceForm } from "../";
import { ButtonOutlined } from "../../Buttons";
import { v4 as uuid } from "uuid";
import "./WorkExperienceFormList.css";

export const WorkExperienceFormList = (props) => {
    const { workExperiences, setWorkExperiences } = props;

    function handleAddButton(e) {
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
        <FormList>
            <ButtonOutlined onClick={handleAddButton}>Add Job</ButtonOutlined>
            {workExperiences.map((workExperience, index) => (
                <WorkExperienceForm
                    key={workExperience.id}
                    {...{ index, workExperience, setWorkExperiences }}
                />
            ))}
        </FormList>
    );
};
