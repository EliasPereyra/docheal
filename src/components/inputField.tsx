import { Control } from "react-hook-form";
import { FormControl } from "./ui/form";
import { Input } from "./ui/input";

interface CustomProps {
  control: Control<any>;
}

export function InputField({
  labelText,
  inputType,
  name,
  placeholder,
  props,
  image,
}: {
  labelText: string;
  inputType?: string;
  name: string;
  placeholder?: string;
  props?: CustomProps;
  image?: string;
}) {
  return (
    <FormControl>
      <div className="flex flex-col gap-2">
        <label>{labelText}</label>
        <Input
          type={inputType || "text"}
          className="bg-[#181D30] border-[#2C3558]"
          name={name}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </FormControl>
  );
}
