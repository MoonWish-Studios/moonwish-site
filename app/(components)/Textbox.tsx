export default function Textbox({
  label,
  regular,
  large,
}: {
  label: string;
  regular?: boolean;
  large?: boolean;
}) {
  return (
    <div className={`textbox-wrapper ${large ? "grid-span-col" : ""}`}>
      <label>{label}</label>
      {regular ? (
        <input type="text" className="textbox-reg" />
      ) : (
        <textarea className="textbox-large" />
      )}
    </div>
  );
}
