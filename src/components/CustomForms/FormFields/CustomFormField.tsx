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
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import PhoneInput from "react-phone-number-input";
import { Checkbox } from "../../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

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
  id: string;
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
  disabled?: boolean;
  value?: string;
  maxLength?: number;
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
        <FormControl>
          <div className="flex gap-2">
            <Input
              id={props.id}
              className="bg-[#181D30] border-[#2C3558]"
              placeholder={props.placeholder}
              disabled={props.disabled}
              maxLength={props.maxLength}
              {...field}
            />
          </div>
        </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            id={props.id}
            placeholder={props.placeholder}
            {...field}
            className="bg-[#181D30] border-[#2C3558]"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            id={props.id}
            placeholder={props.placeholder}
            value={field.value}
            defaultCountry="AR"
            withCountryCallingCode
            international
            onChange={field.onChange}
            className="input-phone"
            disabled={props.disabled}
            limitMaxLength
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div
            className={`flex gap-4 items-center ${
              props.bgTransparent ? "bg-transparent" : "bg-[#2e375c]"
            } border ${
              props.borderTransparent
                ? "border-transparent"
                : "border-[#2C3558]"
            } px-5 py-2 checked:bg-[#2e375c] checked:border-[#2C3558]`}
          >
            <Checkbox
              id={props.id}
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
              id={props.id}
              showIcon
              selected={field.value}
              showTimeSelect={props.showTimeSelect ?? false}
              onChange={(date) => field.onChange(date)}
              dateFormat="dd/MM/yyyy"
              timeInputLabel="Hora:"
              wrapperClassName="date-picker"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
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
