import React from "react";
import { FormAccordion } from "../../Accordions";
import { CardOutlined } from "../";
import { Form } from "../../Forms";

export const FormCard = ({ title, children }) => {
    return (
        <CardOutlined>
            <FormAccordion {...{ title }}>
                <Form>{children}</Form>
            </FormAccordion>
        </CardOutlined>
    );
};
