import { Input } from "./input";

export function InputField({
  labelText,
  inputType,
}: {
  labelText: string;
  inputType?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label>{labelText}</label>
      <Input
        type={inputType || "text"}
        className="bg-[#181D30] border-[#2C3558]"
      />
    </div>
  );
}
