import React from "react";
import { FormCard } from "../../Cards";
import { Input } from "../../Inputs";
import { FormListDeleteButton } from "../../Buttons";

export const EducationForm = ({ index = 0, education, setEducationList }) => {
    const { id, courseName, schoolName, grade, startDate, endDate } = education;

    function onChange(key) {
        return (e) => {
            setEducationList((prev) => {
                prev[index][key] = e.target.value;
                return [...prev];
            });
        };
    }

    return (
        <FormCard title={`Education ${index + 1}`}>
            <Input
                title="Course Name"
                name="courseName"
                value={courseName}
                onChange={onChange("courseName")}
            />
            <Input
                title="School Name"
                name="schoolName"
                value={schoolName}
                onChange={onChange("schoolName")}
            />
            <Input
                title="Grade"
                name="grade"
                value={grade}
                onChange={onChange("grade")}
            />
            <Input
                title="Start"
                name="startDate"
                type="date"
                value={startDate}
                onChange={onChange("startDate")}
            />
            <Input
                title="End (leave empty for active course)"
                name="endDate"
                type="date"
                value={endDate}
                onChange={onChange("endDate")}
            />
            <FormListDeleteButton setList={setEducationList} {...{ id }} />
        </FormCard>
    );
};
