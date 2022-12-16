import { useForm, ValidationError } from "@formspree/react";

export default function Textbox({
  label,
  regular,
  large,
  name,
  type = "text",
  state,
}: {
  label: string;
  name: string;
  regular?: boolean;
  large?: boolean;
  type?: string;
  state: any;
}) {
  return (
    <div className={`textbox-wrapper ${large ? "grid-span-col" : ""}`}>
      <label htmlFor={name}>{label}</label>
      {regular ? (
        <input
          id={name}
          aria-label={name}
          name={name}
          type={type}
          className="textbox-reg"
          required
        />
      ) : (
        <textarea id={name} aria-label={name} name={name} className="textbox-large" required />
      )}
      <ValidationError prefix={name} field={name} errors={state.errors} />
    </div>
  );
}
