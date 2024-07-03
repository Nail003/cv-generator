import React from "react";
import { Card, Input } from "../";
import "./formWork.css";

const FormWork = () => {
    return (
        <form action="" className="form-work">
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
        </form>
    );
};

export default FormWork;
