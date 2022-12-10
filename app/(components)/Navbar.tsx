"use client";
import Image from "next/image";
import React from "react";

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
          <li>
            <a href="">Why Us</a>
          </li>
          <CustomLink href="/services">Services</CustomLink>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <ul>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function CustomLink({ href, children, ...props }: { href: string; children: string }) {
  // const path = window.location.pathname;

  return (
    <li className={href ? "active" : ""}>
      <a href={href}>{children}</a>
    </li>
  );
}