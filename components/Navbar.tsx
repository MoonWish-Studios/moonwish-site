import Image from "next/image";
import React from "react";

export default function Navbar() {
    return (
        <div className="nav">
            <div>
                <a href="index.html" className="logo">
                    <p>MOONWISH</p>
                    <Image
                        src={"/assets/logo.svg"}
                        width="50"
                        height="50"
                        alt=""
                    />
                </a>
            </div>

            <div className="nav-links" id="navLinks">
                <ul>
                    <li>
                        <a href="">Why Us</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
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
