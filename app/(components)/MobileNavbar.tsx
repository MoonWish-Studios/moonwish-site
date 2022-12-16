"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import CustomLink from "./CustomLink";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const oldPathname = useRef(pathname);
  useEffect(() => {
    if (oldPathname.current !== pathname) {
      setOpen(false);
    }

    oldPathname.current = pathname;
  }, [pathname]);
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
          <Link href="/" passHref className="mobileLogo">
            <Image
              src={"/assets/logo.svg"}
              // style={{ width: 100, height: "auto" }}
              alt="Moonwish Studio Logo"
              height={30}
              width={100}
              // className="logoImg"
            />
          </Link>
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
