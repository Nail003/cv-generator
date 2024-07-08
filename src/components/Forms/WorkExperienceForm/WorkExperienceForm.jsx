import React from "react";
import "./WorkExperienceForm.css";
import { Input } from "../../Inputs";
import { FormCard } from "../../Cards/";
import { ButtonOutlined } from "../../Buttons";

export const WorkExperienceForm = ({
    index = 0,
    workExperience,
    setWorkExperiences,
}) => {
    const { companyName, position, responsibility, startDate, endDate, id } =
        workExperience;

    function handleChange(key) {
        return (e) => {
            setWorkExperiences((prev) => {
                prev[index][key] = e.target.value;
                return [...prev];
            });
        };
    }

    function handleDelete(e) {
        e.preventDefault();
        setWorkExperiences((prev) => {
            return prev.filter((current) => current.id !== id);
        });
    }

    return (
        <FormCard title={`Job ${index + 1}`}>
            <Input
                title="Company Name"
                name="companyName"
                value={companyName}
                onChange={handleChange("companyName")}
            />
            <Input
                title="Position"
                name="position"
                value={position}
                onChange={handleChange("position")}
            />
            <Input
                title="Responsibility"
                name="responsibility"
                value={responsibility}
                onChange={handleChange("responsibility")}
            />
            <Input
                title="Start"
                name="startDate"
                type="date"
                value={startDate}
                onChange={handleChange("startDate")}
            />
            <Input
                title="End (leave empty for active job)"
                name="endDate"
                type="date"
                placeholder="leave empty"
                value={endDate}
                onChange={handleChange("endDate")}
            />
            <ButtonOutlined onClick={handleDelete}>Delete</ButtonOutlined>
        </FormCard>
    );
};
