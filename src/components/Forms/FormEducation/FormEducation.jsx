import React from "react";
import { Card, Input } from "../../";
import { Form } from "../";
import "./formEducation.css";

const FormEducation = () => {
    return (
        <Form>
            <Card>
                <div className="form-education__header">
                    <h2 className="form-education__title">Education</h2>
                </div>
                <div className="form-education__input-container">
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
                </div>
            </Card>
        </Form>
    );
};

export default FormEducation;
