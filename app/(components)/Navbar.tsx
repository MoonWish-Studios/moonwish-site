"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomLink from "./CustomLink";
export default function Navbar() {
  return (
    <div className="nav">
      <div>
        <Link href="/" className="logo">
          <Image
            src={"/assets/logo.svg"}
            style={{ width: 100, height: "auto" }}
            alt=""
            height={60}
            width={100}
            className="logoImg"
          />
        </Link>
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
