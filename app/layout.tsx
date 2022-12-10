import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainNavigation from "../components/MainNavigation";
import "../styles/globals.scss";

import { Josefin_Sans } from "@next/font/google";
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={josefin_sans.className}>
            <head />
            <body>
                <MainNavigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
