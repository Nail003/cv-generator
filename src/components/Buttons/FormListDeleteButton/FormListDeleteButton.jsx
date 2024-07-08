import React from "react";
import { ButtonOutlined } from "../";

export const FormListDeleteButton = ({ id, setList }) => {
    function handleDelete(e) {
        e.preventDefault();
        setList((prev) => {
            return prev.filter((current) => current.id !== id);
        });
    }

    return <ButtonOutlined onClick={handleDelete}>Delete</ButtonOutlined>;
};
