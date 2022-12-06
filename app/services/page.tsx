"use client";
import { Josefin_Sans } from "@next/font/google";
import Navbar from "../../components/Navbar";

const josefin_sans = Josefin_Sans();

export default function Services() {
    return (
        <div className={`${josefin_sans.className} container`}>
            <Navbar />
            <main className="main">
                <div>
                    <div className="header">SERVICES</div>
                </div>
            </main>
        </div>
    );
}
