"use client";
import { useEffect } from "react";
import Textbox from "../(components)/Textbox";
import LottieAstronaut from "../(components)/LottieAstronaut";
import { useForm } from "@formspree/react";
export default function Contact() {
  return (
    <div className="contact-section">
      <BigHeader
        className="max-width-800"
        heading="Tell Us About Everything You Need"
        caption="And We Will Take You To The Moon :)"
      />
      <div className="contact-wrapper">
        <ContactDetails />
        <LottieAstronaut />
      </div>

      <BigHeader heading="Our Details" caption="Yep, our email address has three o’s!" />
      <h2>mooonwishstudios@gmail.com</h2>
      <h2>US +1 (714) 752 0110</h2>
    </div>
  );
}

function ContactDetails() {
  const [state, handleSubmit] = useForm("xoqbgoov");

  return (
    <>
      {state.succeeded === true ? (
        <h1 style={{ color: "var(--color-text-secondary)" }}>Submitted Successfully!</h1>
      ) : (
        <Form state={state} handleSubmit={handleSubmit} />
      )}
    </>
  );
}

function Form({ state, handleSubmit }: { state: any; handleSubmit: any }) {
  return (
    <form onSubmit={handleSubmit} className="contact-details">
      <Textbox state={state} regular label="Your Name" name="name" />
      <Textbox state={state} regular label="Phone Number" name="number" type="tel" />
      <Textbox state={state} regular label="Business Name" name="businessName" />
      <Textbox state={state} regular label="Business Email" name="businessEmail" type="email" />
      <Textbox state={state} regular label="Location" name="location" />
      <Textbox state={state} regular label="Website (leave blank if none)" name="website" />
      <Textbox state={state} large label="How Can We Help You?" name="message" />
      <button type="submit" disabled={state.submitting} className="colorful-button grid-span-col">
        Submit
      </button>
    </form>
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
