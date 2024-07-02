import React, { useState } from "react";
import "./collapser.css";

const Collapser = ({ title, children }) => {
    const [collapsed, setCollapsed] = useState(true);

    function handleButtonClick() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={"collapser"}>
            <button className="collapser__button" onClick={handleButtonClick}>
                <h1 className="collapser__title">{title}</h1>
                <h1 className="collapser__title">{collapsed ? "+" : "-"}</h1>
            </button>
            <div
                className={`collapser__container ${
                    collapsed ? "collapsed" : "expand"
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default Collapser;
