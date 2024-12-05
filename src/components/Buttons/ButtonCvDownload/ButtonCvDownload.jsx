import React from "react";
import "./ButtonCvDownload.css";
import { ButtonOutlined } from "../ButtonOutlined/ButtonOutlined";
import { toPng } from "html-to-image";

export const ButtonCvDownload = () => {
    const downloadFile = (image) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = "cv.png";
        a.click();
        a.remove();
    };

    const buttonClickHandler = async () => {
        const cv = document.getElementsByClassName("cv")[0];
        await toPng(cv)
            .then((dataUrl) => {
                downloadFile(dataUrl);
            })
            .catch((e) => {
                console.log("Error: could not download cv");
            });
    };

    return (
        <div className="button-cv-download-container">
            <ButtonOutlined
                onClick={buttonClickHandler}
                className="button-cv-download"
            >
                Download CV
            </ButtonOutlined>
        </div>
    );
};
