"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { PatientRegistrationSchemaValidation } from "@/lib/validation";
import { patientFormDefaultValues } from "@/constants/index";
import { InputField } from "./inputField";
import { Button } from "./ui/button";
import { Form } from "./ui/form";

/**
 * A component for registering a new patient. It redirects to the patient page if the user already exists or once the registration is successful.
 *
 * @returns
 */
export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PatientRegistrationSchemaValidation>>({
    resolver: zodResolver(PatientRegistrationSchemaValidation),
    defaultValues: {
      ...patientFormDefaultValues,
      fullname: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async () => {
    setIsLoading(true);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <InputField
          labelText="Nombre Completo"
          name="fullname"
          placeholder="Juan Perez"
        />

        <InputField
          labelText="Email"
          inputType="email"
          name="email"
          placeholder="juanperez@hotmail.com"
        />

        <InputField
          labelText="Número de Teléfono"
          name="phone"
          placeholder="54 9 1234 5678"
        />

        <Button className="bg-[#4779D9]" type="submit">
          Comencemos
        </Button>
      </form>
    </Form>
  );
}
