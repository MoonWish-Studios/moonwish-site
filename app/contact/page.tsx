"use client";
import { InputBox } from "../(components)/InputBox";
import LottieAstronaut from "../(components)/LottieAstronaut";
export default function Contact() {
  return (
    <div className="contact-section">
      <BigHeader
        heading="Tell Us About Everything You Need"
        caption="And We Will Take You To The Moon"
      />
      <div className="flex-x-center">
        <ContactDetails />
        <div className="lottie-container">
          <LottieAstronaut size={350} />
        </div>
      </div>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="contact-details">
      <InputBox regular label="Your Name" />
      <InputBox regular label="Phone Number" />
      <InputBox regular label="Business Name" />
      <InputBox regular label="Business Email" />
      <InputBox regular label="Location" />
      <InputBox regular label="Website (leave blank if none)" />
      <InputBox large label="How Can We Help You?" />
      <button className="colorful-button grid-span-col">Submit</button>
    </div>
  );
}
function BigHeader({ heading, caption }: { heading: string; caption?: string }) {
  return (
    <div>
      <h1>{heading}</h1>
      <p className="caption">{caption}</p>
    </div>
  );
}
