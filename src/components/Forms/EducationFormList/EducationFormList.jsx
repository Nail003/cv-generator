import React from "react";
import { ButtonOutlined } from "../../Buttons";
import { FormList, EducationForm } from "../";
import { v4 as uuid } from "uuid";

export const EducationFormList = ({ educationList, setEducationList }) => {
    function handleAddButton(e) {
        e.preventDefault();
        const initialEducation = {
            id: uuid(),
            courseName: "",
            schoolName: "",
            grade: "",
            startDate: "",
            endDate: "",
        };
        setEducationList((prev) => [...prev, initialEducation]);
    }

    return (
        <FormList>
            <ButtonOutlined onClick={handleAddButton}>
                Add Education
            </ButtonOutlined>
            {educationList.map((education, index) => (
                <EducationForm
                    key={education.id}
                    {...{ index, education, setEducationList }}
                />
            ))}
        </FormList>
    );
};
