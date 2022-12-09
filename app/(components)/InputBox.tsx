export function InputBox({
  label,
  regular,
  large,
}: {
  label: string;
  regular?: boolean;
  large?: boolean;
}) {
  return (
    <div className={`input-wrapper ${large && "grid-span-col"}`}>
      <label>{label}</label>
      {regular ? (
        <input type="text" className="input-reg" />
      ) : (
        <textarea className="input-large" id="test" />
      )}
    </div>
  );
}
