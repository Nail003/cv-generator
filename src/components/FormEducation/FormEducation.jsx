import React from "react";
import { Button, Card, Input } from "../";
import "./formEducation.css";

const FormEducation = () => {
    return (
        <form action="" className="form-education">
            <Card>
                <Input
                    label="Course Title"
                    name="course-title"
                    placeholder="i.e Civil Engineering"
                />
                <Input
                    label="Instituition"
                    name="instituition"
                    placeholder="i.e Fake Oxford Academy"
                />
                <Input
                    label="Completion Date"
                    name="completion-date"
                    type="date"
                />
            </Card>
        </form>
    );
};

export default FormEducation;
