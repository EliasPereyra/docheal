import { Textarea } from "../../ui/textarea";

export function TextAreaField({ labelText }: { labelText: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label>{labelText}</label>
      <Textarea className="bg-[#181D30] border-[#2C3558]" />
    </div>
  );
}
