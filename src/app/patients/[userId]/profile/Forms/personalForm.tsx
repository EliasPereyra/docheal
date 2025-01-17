"use client";

import { FormControl } from "../../../../../components/ui/form";
import CustomFormField, {
  FormFieldType,
} from "../../../../../components/CustomForms/FormFields/CustomFormField";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../../components/ui/radio-group";
import { civilStatus, Gender } from "@/constants";
import { Label } from "../../../../../components/ui/label";
import { SelectItem } from "../../../../../components/ui/select";

export default function PersonalForm({
  form,
  patient,
}: {
  form: any;
  patient: any;
}) {
  return (
    <div className="mt-10 w-full">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-6 w-full">
          <CustomFormField
            id="civilStatus"
            control={form.control}
            name="civilStatus"
            label="Estado Civil"
            fieldType={FormFieldType.SELECT}
          >
            {civilStatus.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="capitalize"
              >
                {option.name}
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            id="address"
            name="address"
            label="Dirección"
            fieldType={FormFieldType.INPUT}
            value={patient?.address}
          />

          <CustomFormField
            id="birthDate"
            control={form.control}
            name="birthDate"
            label="Fecha de Nacimiento"
            fieldType={FormFieldType.DATE_PICKER}
            value={patient?.birthDate}
          />
        </div>

        <div className="flex flex-col gap-6 w-full">
          <CustomFormField
            id="phoneNumber"
            control={form.control}
            name="phoneNumber"
            label="Número de Teléfono"
            maxLength={15}
            disabled
            fieldType={FormFieldType.PHONE_INPUT}
            value={patient?.phoneNumber}
          />

          <div className="flex flex-col gap-2">
            <label>Género</label>
            <CustomFormField
              id="gender"
              control={form.control}
              label=""
              fieldType={FormFieldType.SKELETON}
              name="gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex justify-between gap-6 h-10"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {Gender.map((option, i) => (
                      <div
                        className="flex gap-2 items-center bg-[#181D30] border border-[#2C3558] border-dashed rounded-md px-10"
                        key={option}
                      >
                        <RadioGroupItem
                          value={option}
                          id={option}
                          className="radio-group"
                        />
                        <Label htmlFor={option}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

          <CustomFormField
            id="profession"
            control={form.control}
            name="profession"
            label="Ocupación"
            maxLength={50}
            fieldType={FormFieldType.INPUT}
            value={patient?.profession}
          />

          <CustomFormField
            id="phoneNumberAlt"
            name="phoneNumberAlt"
            control={form.control}
            label="Número de Teléfono Auxiliar"
            fieldType={FormFieldType.PHONE_INPUT}
            value={patient?.phoneNumberAlt}
          />
        </div>
      </div>
    </div>
  );
}
