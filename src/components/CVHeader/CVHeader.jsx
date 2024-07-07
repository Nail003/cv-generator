import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./CVHeader.css";

export const CVHeader = ({ personalInfo }) => {
    const { firstName, lastName, email, phone } = personalInfo;
    return (
        <div className="cv-header">
            <section className="cv-header__name-section">
                <h1 className="cv-header__name">{firstName}</h1>
                <h1 className="cv-header__name">{lastName}</h1>
            </section>

            <section className="cv-header__contact-section">
                <h2 className="cv-header__section-title">Contacts</h2>
                {email && (
                    <div className="cv-header__section-entry">
                        <div className="cv-header__icon">
                            <MdEmail />
                        </div>
                        <p className="cv-header__section-text">{email}</p>
                    </div>
                )}
                {phone && (
                    <div className="cv-header__section-entry">
                        <div className="cv-header__icon">
                            <FaPhoneAlt />
                        </div>
                        <p className="cv-header__section-text">{phone}</p>
                    </div>
                )}
            </section>
        </div>
    );
};
