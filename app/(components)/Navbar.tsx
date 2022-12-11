"use client";
import Image from "next/image";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav">
            <div>
                <a href="/" className="logo">
                    <img
                        src={"/assets/logo.svg"}
                        style={{ width: 100, height: "auto" }}
                        alt=""
                        className="logoImg"
                    />
                </a>
            </div>

            <div className="nav-links" id="navLinks">
                <ul>
                    <CustomLink href="/why-us">Why Us</CustomLink>
                    <CustomLink href="/services">Services</CustomLink>
                    <CustomLink href="/faq">FAQ</CustomLink>
                </ul>
            </div>
            <div className="contact nav-links">
                <ul>
                    <CustomLink href="/contact">Contact</CustomLink>
                </ul>
            </div>
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
