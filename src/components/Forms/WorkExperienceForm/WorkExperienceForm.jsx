import React from "react";
import "./WorkExperienceForm.css";
import { Input } from "../../Inputs";
import { FormCard } from "../../Cards/";
import { FormListDeleteButton } from "../../Buttons";

export const WorkExperienceForm = ({
    index = 0,
    workExperience,
    setWorkExperiences,
}) => {
    const { companyName, position, responsibility, startDate, endDate, id } =
        workExperience;

    function onChange(key) {
        return (e) => {
            setWorkExperiences((prev) => {
                prev[index][key] = e.target.value;
                return [...prev];
            });
        };
    }

    return (
        <FormCard title={`Job ${index + 1}`}>
            <Input
                title="Company Name"
                name="companyName"
                value={companyName}
                onChange={onChange("companyName")}
            />
            <Input
                title="Position"
                name="position"
                value={position}
                onChange={onChange("position")}
            />
            <Input
                title="Responsibility"
                name="responsibility"
                value={responsibility}
                onChange={onChange("responsibility")}
            />
            <Input
                title="Start"
                name="startDate"
                type="date"
                value={startDate}
                onChange={onChange("startDate")}
            />
            <Input
                title="End (leave empty for active job)"
                name="endDate"
                type="date"
                placeholder="leave empty"
                value={endDate}
                onChange={onChange("endDate")}
            />
            <FormListDeleteButton setList={setWorkExperiences} {...{ id }} />
        </FormCard>
    );
};
