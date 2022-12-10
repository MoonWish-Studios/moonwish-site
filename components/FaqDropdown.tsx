"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function FaqDropdown({
    title,
    contents,
}: {
    title: string;
    contents: string;
}) {
    const [isOpen, setIsOpen] = React.useState(false);

    const closedChevron = (
        <IconContext.Provider value={{ color: "#8443d9" }}>
            <FaChevronDown size="15px" />
        </IconContext.Provider>
    );

    const openChevron = (
        <IconContext.Provider value={{ color: "#8443d9" }}>
            <FaChevronUp size="15px" />
        </IconContext.Provider>
    );

    return (
        <div className="dropdownCard">
            <button
                id="dropButton"
                onClick={() => setIsOpen(!isOpen)}
                className={isOpen ? "dropdownButtonOpen" : "dropdownButton"}
            >
                {isOpen ? openChevron : closedChevron}
                <p className="faqTitle">{title}</p>
            </button>
            {isOpen && (
                <div className="dropdownCard_content">
                    <p>{contents}</p>
                </div>
            )}
        </div>
    );
}
