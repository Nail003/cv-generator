import React from "react";
import { Card, Input } from "../..";
import { Form } from "../";
import "./formWork.css";

const FormWork = () => {
    return (
        <Form>
            <Card>
                <Input label="Company Name" name="company-name" />
                <Input label="Position Title" name="position-title" />
                <Input
                    label="Main Resonsibilities"
                    name="main-responsibilities"
                />
                <Input label="From" name="work-start" type="date" />
                <Input label="To" name="work-end" type="date" />
            </Card>
        </Form>
    );
};

export default FormWork;
