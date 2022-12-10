import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function FaqDropdown({
    title,
    contents,
}: {
    title: string;
    contents: string;
}) {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropButton = document.getElementById("dropButton");
    return (
        <div className="dropdownCard">
            <button
                id="dropButton"
                onClick={() => setIsOpen(!isOpen)}
                className={isOpen ? "dropdownButtonOpen" : "dropdownButton"}
            >
                <IconContext.Provider value={{ color: "#8443d9" }}>
                    <FaChevronDown size="15px" />
                </IconContext.Provider>
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
