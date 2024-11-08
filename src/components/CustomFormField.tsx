import { Control } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-phone-number-input/style.css";
import "react-datepicker/dist/react-datepicker.css";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import PhoneInput from "react-phone-number-input";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  SELECT = "select",
  SKELETON = "skeleton",
  DATE_PICKER = "datePicker",
  PHONE_INPUT = "phoneInput",
}

type CustomFormFieldProps = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  showTimeSelect?: boolean;
  fieldType?: FormFieldType;
  bgTransparent?: boolean;
  borderTransparent?: boolean;
  renderSkeleton?: (field: any) => React.ReactNode;
  children?: React.ReactNode;
};

export function InputType({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
}) {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div>
          <FormControl>
            <Input
              className="bg-[#181D30] border-[#2C3558]"
              placeholder={props.placeholder}
              {...field}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="bg-[#181D30] border-[#2C3558]"
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            placeholder={props.placeholder}
            value={field.value}
            defaultCountry="AR"
            withCountryCallingCode
            international
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div
            className={`flex gap-4 items-center ${
              props.bgTransparent ? "bg-transparent" : "bg-[#181D30]"
            } border ${
              props.borderTransparent
                ? "border-transparent"
                : "border-[#2C3558]"
            } px-5 py-2 rounded-sm`}
          >
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name}>{props.label}</label>
          </div>
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <FormControl>
          <div className="bg-[#181D30] border border-[#2C3558] rounded-sm">
            <ReactDatePicker
              selected={field.value}
              showTimeSelect={props.showTimeSelect ?? false}
              onChange={(date) => field.onChange(date)}
              dateFormat="dd/MM/yyyy"
              timeInputLabel="Hora:"
              wrapperClassName="date-picker"
            />
          </div>
        </FormControl>
      );
    case FormFieldType.SELECT:
      return (
        <div className="flex flex-col gap-2">
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="bg-[#181D30] border-[#2C3558] text-slate-300">
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
              <SelectContent className="bg-[#181D30] border-[#2C3558] text-slate-300">
                {props.children}
              </SelectContent>
            </Select>
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
}

const CustomFormField = (props: CustomFormFieldProps) => {
  const { name, control, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{props.label}</FormLabel>
          )}
          <InputType field={field} props={props} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
