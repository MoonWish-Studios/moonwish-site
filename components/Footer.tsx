import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <footer>
      <div className="footer-directory">
        <Image
          className="footer-logo"
          width={150}
          height={60}
          src="/assets/icons/moonwish-studios.svg"
          alt="Moonwish Studios Logo"
        />
        <div className="footer-group">
          <h3>Info</h3>
          <FooterInfo alt="email" src="/assets/icons/email.svg">
            mooonwishstudios@gmail.com
          </FooterInfo>
          <FooterInfo alt="phone " src="/assets/icons/phone.svg">
            +1 (714) 330 9387
          </FooterInfo>
          <FooterInfo alt="email" src="/assets/icons/home.svg">
            Cypress, Orange County, USA
          </FooterInfo>
        </div>
        <div className="footer-group">
          <h3>Company</h3>
          <Link className="next-link" href="/why-us">
            Why Us
          </Link>
          <Link className="next-link" href="/our-works">
            Our Works
          </Link>
          <Link className="next-link" href="/services">
            Services
          </Link>
          <Link className="next-link" href="/contact">
            Contact
          </Link>
        </div>
        <div className="footer-group">
          <h3>Legal</h3>
          <Link className="next-link" href="/privacy">
            Privacy
          </Link>
          <Link className="next-link" href="/Terms">
            Terms
          </Link>
        </div>
      </div>

      <div className="footer-copyright">© 2022 Moonwish Studios | All rights reserved</div>
    </footer>
  );
}

export function FooterInfo({ src, children, alt }: { src: string; children: string; alt: string }) {
  return (
    <div className="flex-y-center flex-gap-5">
      <Image src={src} width={14} height={14} alt={alt} />
      {children}
    </div>
  );
}
