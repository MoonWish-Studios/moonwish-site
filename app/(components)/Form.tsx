"use client";
import Textbox from "./Textbox";

export default function Form({ state, handleSubmit }: { state: any; handleSubmit: any }) {
  return (
    <form onSubmit={handleSubmit} className="contact-details">
      <Textbox state={state} regular label="Your Name" name="name" />
      <Textbox state={state} regular label="Phone Number" name="number" type="tel" />
      <Textbox state={state} regular label="Business Name" name="businessName" />
      <Textbox state={state} regular label="Business Email" name="businessEmail" type="email" />
      <Textbox state={state} regular label="Location" name="location" />
      <Textbox state={state} regular label="Website (N/A if none)" name="website" />
      <Textbox state={state} large label="How Can We Help You?" name="message" />
      <button type="submit" disabled={state.submitting} className="colorful-button grid-span-col">
        Submit
      </button>
    </form>
  );
}
