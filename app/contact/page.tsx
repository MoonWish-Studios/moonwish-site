"use client";
import Textbox from "../(components)/Textbox";
import LottieAstronaut from "../(components)/LottieAstronaut";
export default function Contact() {
  return (
    <div className="contact-section">
      <BigHeader
        className="max-width-800"
        heading="Tell Us About Everything You Need"
        caption="And We Will Take You To The Moon"
      />
      <div>
        <ContactDetails />
        <LottieAstronaut size={350} />
      </div>

      {/* <BigHeader heading="Our Details" caption="Yep, our email address has three o’s!" />
      <BigHeader
        className="margin-20-vertical color-text-third hover-text-primary"
        heading="mooonwishstudios@gmail.com"
      />
      <BigHeader
        className="margin-20-vertical color-text-third hover-text-primary"
        heading="US +1 (714) 752 0110"
      /> */}
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="contact-details">
      <Textbox regular label="Your Name" />
      <Textbox regular label="Phone Number" />
      <Textbox regular label="Business Name" />
      <Textbox regular label="Business Email" />
      <Textbox regular label="Location" />
      <Textbox regular label="Website (leave blank if none)" />
      <Textbox large label="How Can We Help You?" />
      <button className="colorful-button grid-span-col">Submit</button>
    </div>
  );
}
function BigHeader({
  heading,
  caption,
  className,
}: {
  heading: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div>
      <h1 className={className}>{heading}</h1>
      {caption && <p className="caption">{caption}</p>}
    </div>
  );
}
