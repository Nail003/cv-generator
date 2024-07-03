import React, { useState } from "react";
import { Card, Input } from "../";
import "./formPersonal.css";

const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
};

const FormPersonal = () => {
    const [formData, setFormData] = useState(initialFormData);

    function onChange(status) {
        return (e) => {
            const value = e.target.value;
            if (status === "firstName")
                setFormData((prev) => {
                    return { ...prev, firstName: value };
                });
            if (status === "lastName")
                setFormData((prev) => {
                    return { ...prev, lastName: value };
                });
            if (status === "email")
                setFormData((prev) => {
                    return { ...prev, email: value };
                });
            if (status === "phone")
                setFormData((prev) => {
                    return { ...prev, phone: value };
                });
        };
    }

    return (
        <form action="" className="form-personal">
            <Card>
                <Input
                    label="First Name"
                    name="firstName"
                    placeholder="i.e Nail"
                    value={formData.firstName}
                    onChange={onChange("firstName")}
                />
                <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="i.e Bin Hammer"
                    value={formData.lastName}
                    onChange={onChange("lastName")}
                />
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="i.e nail@gmail.com"
                    value={formData.email}
                    onChange={onChange("email")}
                />
                <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="i.e 0300-1234567"
                    value={formData.phone}
                    onChange={onChange("phone")}
                />
            </Card>
        </form>
    );
};

export default FormPersonal;
