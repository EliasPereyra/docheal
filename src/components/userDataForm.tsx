import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { z } from "zod";

import { Select } from "@radix-ui/react-select";
import { InputField } from "./inputField";
import { Form } from "./ui/form";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { CheckboxField } from "./checkBoxField";
import { Button } from "./ui/button";
import { TextAreaField } from "./textAreaField";

import { zodResolver } from "@hookform/resolvers/zod";
import { PatientFormSchemaValidation } from "@/lib/validation";

export function UserDataForm() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const form = useForm<z.infer<typeof PatientFormSchemaValidation>>({
    resolver: zodResolver(PatientFormSchemaValidation),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      birthDate: new Date(),
      gender: "Male",
      address: "",
      profession: "",
      civilStatus: "Single",
      phoneNumberAlt: "",
      healthInsuranceNumber: "",
      allergies: "",
      currentMedicines: "",
      familyMedicalHistory: "",
      pastFamilyMedicalHistory: "",
      idType: undefined,
      idNumber: "",
      idPhotoUrl: undefined,
      treatmentConsent: false,
      disclosureConsent: false,
      privacyConsent: false,
    },
  });

  const onSubmit = () => {};

  return (
    <div>
      {/* TODO: agregar funcionalidad al Form */}
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* NOTE: Seccion de informacion personal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Información Personal</h3>
          </div>
          <div className="flex flex-col gap-4">
            <InputField name="fullname" labelText="Nombre Completo" required />
            <div className="flex gap-10">
              <div className="flex flex-col gap-6 w-full">
                <InputField
                  name="email"
                  labelText="Email"
                  inputType="email"
                  required
                />

                <div className="flex flex-col gap-2">
                  <label>Fecha de Nacimiento</label>
                  <div className="bg-[#181D30] border border-[#2C3558] rounded-sm">
                    <ReactDatePicker
                      selected={startDate}
                      // onSelect={handleDateSelect}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      showTimeSelect
                      timeInputLabel="Hora:"
                      wrapperClassName="date-picker"
                    />
                  </div>
                </div>

                {/* TODO: finish the style */}
                <div className="flex flex-col gap-2">
                  <label>Estado Civil</label>
                  <div>
                    <Select>
                      <SelectTrigger className="bg-[#181D30] border-[#2C3558] text-slate-300">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#181D30] border-[#2C3558] text-slate-300">
                        <SelectItem value="Casado/a">Casado/a</SelectItem>
                        <SelectItem value="Soltero/a">Soltero/a</SelectItem>
                        <SelectItem value="Divorciado/a">
                          Divorciado/a
                        </SelectItem>
                        <SelectItem value="Viudo/a">Viudo/a</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <InputField name="" labelText="Localidad" />
              </div>

              <div className="flex flex-col gap-6 w-full">
                <InputField name="phone" labelText="Número de Teléfono" />
                {/* TODO: finish the style */}
                <div className="flex flex-col gap-2">
                  <label>Género</label>
                  <div className="flex gap-4">
                    <CheckboxField
                      labelText="Masculino"
                      className="flex gap-4 items-center bg-[#181D30] border border-[#2C3558] px-5 py-2.5 rounded-sm"
                    />

                    <CheckboxField
                      labelText="Femenino"
                      className="flex gap-4 items-center bg-[#181D30] border border-[#2C3558] px-5 py-2.5 rounded-sm"
                    />
                  </div>
                </div>

                <InputField name="" labelText="Ocupación" />

                <InputField
                  name="auxiliaryPhone"
                  labelText="Número de Teléfono Auxiliar"
                  inputType="number"
                />
              </div>
            </div>
          </div>

          {/* NOTE Seccion de informacion medica */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Información Médica</h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-10">
                <div className="flex flex-col gap-6 w-full">
                  <InputField name="" labelText="Proveedor de Seguros" />

                  <TextAreaField labelText="Alergias (si tiene)" />

                  <TextAreaField labelText="Historial Médico Familiar" />
                </div>

                <div className="flex flex-col gap-6 w-full">
                  <InputField name="" labelText="Número de Polizas de Seguro" />
                  <TextAreaField labelText="Medicaciones actuales" />

                  <TextAreaField labelText="Historial Médico Anterior" />
                </div>
              </div>
            </div>
          </div>
          {/* NOTE Seccion de Identificacion y Verificacion */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">
              Identificación y Verificación
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-10">
                <div className="flex flex-col gap-6 w-full">
                  <InputField name="" labelText="Tipo de Identificación" />

                  <InputField name="" labelText="Número de Identificación" />

                  <InputField
                    name="file"
                    inputType="file"
                    labelText="Copia escaneado del CUIT/N° Doc."
                  />
                </div>
              </div>
            </div>
          </div>
          {/* NOTE Seccion de Consentimiento y Politicas de Privacidad */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">
              Consentimiento y Políticas de Privacidad
            </h3>
            <div className="flex flex-col gap-4">
              <CheckboxField
                className="flex items-center gap-2"
                labelText="Consiento en recibir tratamiento para mi condición de salud"
              />
              <CheckboxField
                className="flex items-center gap-2"
                labelText="Consiento al uso y exposición de mis datos médicos por razones
                de tratamiento"
              />
              <CheckboxField
                className="flex items-center gap-2"
                labelText="Reconozco que he revisado y acuerdo a las políticas de
                privacidad"
              />
            </div>
          </div>
          <Button className="bg-[#4779D9]" type="submit">
            Comencemos
          </Button>
        </form>
      </Form>
    </div>
  );
}
