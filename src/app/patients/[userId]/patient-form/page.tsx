"use client";

import { useState } from "react";
import Image from "next/image";
import ReactDatePicker from "react-datepicker";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/inputField";
import { TextAreaField } from "@/components/ui/textAreaField";
import { CheckboxField } from "@/components/ui/checkBoxField";

import Logo from "../../../public/assets/docheal-logo.png";
import { Form } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PatientForm() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <section className="bg-[#080A10] text-slate-200 min-h-screen flex items-center">
      <div className="p-20 flex flex-col gap-10 w-full">
        {/* NOTE Sección del texto principal  */}
        <div className="flex flex-col gap-2">
          <Image
            src={Logo}
            alt="Logo oficial de la página"
            width={256}
            height={212}
            className="w-24 mb-6"
          />
          <h2 className="text-5xl font-bold">Bienvenido John Doe!</h2>
          <p>
            En esta sección necesitas agregar todos tus datos personales y
            médicos.
          </p>
        </div>
        {/* NOTE Seccion de informacion personal */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Información Personal</h3>
          <Form>
            <form className="flex flex-col gap-6">
              <InputField labelText="Nombre Completo" />

              <div className="flex gap-10">
                <div className="flex flex-col gap-6 w-full">
                  <InputField labelText="Email" inputType="email" />

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
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
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

                  <InputField labelText="Localidad" />
                </div>

                <div className="flex flex-col gap-6 w-full">
                  <InputField labelText="Número de Teléfono" />
                  {/* TODO: finish the style */}
                  <label>Género</label>
                  <div className="flex gap-4">
                    <CheckboxField
                      labelText="Masculino"
                      className="bg-[#181D30] border-[#2C3558] p-2 rounded-sm"
                    />

                    <CheckboxField
                      labelText="Femenino"
                      className="bg-[#181D30] border-[#2C3558] p-2 rounded-sm"
                    />
                  </div>

                  <InputField labelText="Ocupación" />

                  <InputField
                    labelText="Número de Teléfono Auxiliar"
                    inputType="number"
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
        {/* NOTE Seccion de informacion medica */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Información Médica</h3>
          <form className="flex flex-col gap-6">
            <div className="flex gap-10">
              <div className="flex flex-col gap-6 w-full">
                <InputField labelText="Proveedor de Seguros" />

                <TextAreaField labelText="Alergias (si tiene)" />

                <TextAreaField labelText="Historial Médico Familiar" />
              </div>

              <div className="flex flex-col gap-6 w-full">
                <InputField labelText="Número de Polizas de Seguro" />
                <TextAreaField labelText="Medicaciones actuales" />

                <TextAreaField labelText="Historial Médico Anterior" />
              </div>
            </div>
          </form>
        </div>
        {/* NOTE Seccion de Identificacion y Verificacion */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Identificación y Verificación</h3>
          <form className="flex flex-col gap-6">
            <div className="flex gap-10">
              <div className="flex flex-col gap-6 w-full">
                <InputField labelText="Tipo de Identificación" />

                <InputField labelText="Número de Identificación" />

                <TextAreaField labelText="Copia escaneado del CUIT/N° Doc." />
              </div>
            </div>
          </form>
        </div>
        {/* NOTE Seccion de Consentimiento y Politicas de Privacidad */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold">
            Consentimiento y Políticas de Privacidad
          </h3>
          <div className="flex flex-col gap-2">
            <CheckboxField labelText="Consiento en recibir tratamiento para mi condición de salud" />
            <CheckboxField
              labelText="Consiento al uso y exposición de mis datos médicos por razones
                de tratamiento"
            />
            <CheckboxField
              labelText="Reconozco que he revisado y acuerdo a las políticas de
                privacidad"
            />
          </div>
        </div>
        <Button className="bg-[#4779D9]" type="submit">
          Comencemos
        </Button>
      </div>
      <Image
        src="/assets/imgs/doc-bg.jpg"
        alt="Imagen de instrumentos de escritorio"
        width="660"
        height="924"
        className="sticky top-0 right-0"
      />
    </section>
  );
}
