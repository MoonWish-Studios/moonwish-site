import Footer from "./(components)/Footer";
import MainNavigation from "./(components)/MainNavigation";
import "../styles/globals.scss";
import { Josefin_Sans } from "@next/font/google";
import Script from "next/script";
const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--josefin-sans",
});

declare global {
  interface Window {
    dataLayer: any;
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={josefin_sans.className}>
      <head />

      {/* <!-- Google tag (gtag.js) --> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WD36EMCCJT" />
      <Script
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-WD36EMCCJT');`,
        }}
      />
      <body>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
