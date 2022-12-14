"use client";
import { useEffect } from "react";
import Textbox from "../(components)/Textbox";
import LottieAstronaut from "../(components)/LottieAstronaut";
import { useForm } from "@formspree/react";
import Form from "../(components)/Form";
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
