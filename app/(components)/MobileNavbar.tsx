"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";

export default function MobileNavbar() {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = (
        <RxHamburgerMenu
            className="hamburgerIcon"
            size="40px"
            color="white"
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
            {open && (
                <ul className="navItems">
                    <CustomLink href="/">Why Us</CustomLink>
                    <CustomLink href="/services">Services</CustomLink>
                    <CustomLink href="/faq">FAQ</CustomLink>
                </ul>
            )}
        </div>
    );
}

function CustomLink({
    href,
    children,
    ...props
}: {
    href: string;
    children: string;
}) {
    // const path = window.location.pathname;

    return (
        <li className={href ? "active" : ""}>
            <a href={href}>{children}</a>
        </li>
    );
}
