import React from "react";
import { Input } from "../../Inputs";
import "./PersonalInfoForm.css";
import { Form } from "../Form/Form";

export const PersonalInfoForm = ({ personalInfo, setPersonalInfo }) => {
    const { firstName, lastName, email, phone } = personalInfo;

    function onChange(key) {
        return (e) => {
            setPersonalInfo((prev) => {
                prev[key] = e.target.value;
                return { ...prev };
            });
        };
    }

    return (
        <Form>
            <Input
                title="First Name"
                name="firstName"
                placeholder="Nail"
                value={firstName}
                onChange={onChange("firstName")}
            />
            <Input
                title="Last Name"
                name="lastName"
                placeholder="Bin Hammer"
                value={lastName}
                onChange={onChange("lastName")}
            />
            <Input
                title="Email"
                name="email"
                placeholder="nail123@gmail.com"
                value={email}
                onChange={onChange("email")}
            />
            <Input
                title="Phone"
                type="tel"
                name="phone"
                placeholder="0300-123456789"
                value={phone}
                onChange={onChange("phone")}
            />
        </Form>
    );
};
