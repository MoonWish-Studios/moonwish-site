"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function FaqDropdown({ title, contents }: { title: string; contents: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const openChevron = (
    <IconContext.Provider value={{ color: "var(--color-text-secondary)" }}>
      <FaChevronDown size="15px" />
    </IconContext.Provider>
  );

  const closeChevron = (
    <IconContext.Provider value={{ color: "#8443d9" }}>
      <FaChevronUp size="15px" />
    </IconContext.Provider>
  );

  return (
    <div className="dropdownCard">
      <div
        // id="dropButton"
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "dropdownButtonOpen" : "dropdownButton"}
      >
        {isOpen ? closeChevron : openChevron}
        <p className="faqTitle">{title}</p>
      </div>
      {isOpen && <div className="dropdownCard_content">{contents}</div>}
    </div>
  );
}
