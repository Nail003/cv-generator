import React from "react";
import { Card, Input } from "../";

const FormPersonal = () => {
    return (
        <form action="" className="form-personal">
            <Card>
                <Input label="First Name" name="first-name" />
                <Input label="Last Name" name="last-name" />
                <Input label="Email" name="email" type="email" />
                <Input label="Phone" name="phone" type="tel" />
            </Card>
        </form>
    );
};

export default FormPersonal;
