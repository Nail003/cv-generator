import React from "react";
import { Input } from "../../Inputs";
import "./PersonalInfoForm.css";

export const PersonalInfoForm = ({ personalInfo, setPersonalInfo }) => {
    const { firstName, lastName, email, phone } = personalInfo;

    function onChange(status) {
        switch (status) {
            case "firstName":
                return (e) =>
                    setPersonalInfo((prev) => {
                        return { ...prev, firstName: e.target.value };
                    });

            case "lastName":
                return (e) =>
                    setPersonalInfo((prev) => {
                        return { ...prev, lastName: e.target.value };
                    });

            case "email":
                return (e) =>
                    setPersonalInfo((prev) => {
                        return { ...prev, email: e.target.value };
                    });

            case "phone":
                return (e) =>
                    setPersonalInfo((prev) => {
                        return { ...prev, phone: e.target.value };
                    });
        }
    }

    return (
        <form action="" className="personal-info-form">
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
        </form>
    );
};
