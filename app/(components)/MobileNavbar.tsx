"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import CustomLink from "./CustomLink";
import { useState } from "react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <RxHamburgerMenu
      className="hamburgerIcon"
      size="28px"
      color="var(--color-text-secondary)"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <IoCloseOutline
      className="hamburgerIcon"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <>
      <div className="mobileNav">
        <div>
          <a href="/" className="mobileLogo">
            <img
              src={"/assets/logo.svg"}
              style={{ width: 100, height: "auto" }}
              alt=""
              className="logoImg"
            />
          </a>
        </div>
        {open ? closeIcon : hamburgerIcon}
      </div>
      {open && (
        <ul className="navItems">
          <CustomLink href="/why-us">Why Us</CustomLink>
          <CustomLink href="/services">Services</CustomLink>
          <CustomLink href="/faq">FAQ</CustomLink>
          <CustomLink href="/contact">Contact</CustomLink>
        </ul>
      )}
    </>
  );
}
