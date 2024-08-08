import { Checkbox } from "./ui/checkbox";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function CheckboxField({ labelText, ...props }: { labelText: string }) {
  return (
    <div className="flex gap-2 items-center" {...props}>
      <Checkbox className="border-[#2C3558]" />
      <label>{labelText}</label>
    </div>
  );
}
