import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../../ui/form";
import { Input } from "../../ui/input";

interface CustomProps {
  control: Control<any>;
}

export function InputField({
  labelText,
  name,
  placeholder,
  control,
}: {
  labelText: string;
  name: string;
  placeholder?: string;
  control: Control<any>;
  required?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={field.name}>{labelText}</FormLabel>
          <FormControl>
            <div className="flex flex-col gap-2">
              <Input
                {...field}
                className="bg-[#181D30] border-[#2C3558]"
                placeholder={placeholder}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
