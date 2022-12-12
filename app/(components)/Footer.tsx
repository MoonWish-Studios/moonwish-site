import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <footer>
      <div className="footer-directory">
        <Link href="/">
          <Image
            className="footer-logo"
            width={150}
            height={60}
            src="/assets/icons/moonwish-studios.svg"
            alt="Moonwish Studios Logo"
          />
        </Link>
        <div className="footer-group">
          <h4>Info</h4>
          <FooterInfo alt="email" src="/assets/icons/email.svg">
            mooonwishstudios@gmail.com
          </FooterInfo>
          <FooterInfo alt="phone " src="/assets/icons/phone.svg">
            +1 (714) 330 9387
          </FooterInfo>
          <FooterInfo alt="home" src="/assets/icons/home.svg">
            Cypress, CA, USA
          </FooterInfo>
          <FooterInfo alt="home" src="/assets/icons/home.svg">
            Irvine, CA, USA
          </FooterInfo>
        </div>
        <div className="footer-group">
          <h4>Company</h4>
          <Link className="next-link" href="/">
            Home
          </Link>
          <Link className="next-link" href="/why-us">
            Why Us
          </Link>
          {/* <Link className="next-link" href="/our-works">
            Our Works
          </Link> */}
          <Link className="next-link" href="/services">
            Services
          </Link>
          <Link className="next-link" href="/contact">
            Contact
          </Link>
        </div>
        {/* <div className="footer-group">
          <h4>Legal</h4>
          <Link className="next-link" href="/privacy">
            Privacy
          </Link>
          <Link className="next-link" href="/Terms">
            Terms
          </Link>
        </div> */}
      </div>

      <div className="footer-copyright">© 2022 Moonwish Studios | All rights reserved</div>
    </footer>
  );
}

export function FooterInfo({ src, children, alt }: { src: string; children: string; alt: string }) {
  return (
    <div className="footer-info">
      <Image src={src} width={14} height={14} alt={alt} />
      {children}
    </div>
  );
}
