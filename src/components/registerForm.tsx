"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

import { PatientRegistrationSchemaValidation } from "@/lib/validation";
import { patientFormDefaultValues } from "@/constants/index";
import { InputField } from "./inputField";
import { Form } from "./ui/form";
import { createUser, getUser } from "@/lib/actions/patient.actions";
import { SubmitButton } from "./submitButton";

/**
 * A component for registering a new patient. It redirects to the patient page if the user already exists or once the registration is successful.
 *
 */
export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof PatientRegistrationSchemaValidation>>({
    resolver: zodResolver(PatientRegistrationSchemaValidation),
    defaultValues: {
      ...patientFormDefaultValues,
      fullname: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof PatientRegistrationSchemaValidation>
  ) => {
    setIsLoading(true);
    console.log(values);

    try {
      const user = {
        fullname: values.fullname,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);
      if (await getUser(newUser.$id)) {
        toast.error("El usuario ya existe");
        setIsLoading(false);
        return;
      }

      if (newUser) {
        toast.success("Usuario creado exitosamente");
        router.push(`/patient/${newUser.$id}/register`);
      }
    } catch (error) {
      console.error("Error al registrar el usuario: ", error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <Toaster position="top-right" />
        <InputField
          labelText="Nombre Completo"
          control={form.control}
          name="fullname"
          placeholder="Juan Perez"
        />

        <InputField
          labelText="Email"
          control={form.control}
          name="email"
          placeholder="juanperez@hotmail.com"
        />

        <InputField
          labelText="Número de Teléfono"
          name="phone"
          control={form.control}
          placeholder="54 9 1234 5678"
        />

        <SubmitButton isLoading={isLoading} className="bg-[#4779D9]">
          Comencemos
        </SubmitButton>
      </form>
    </Form>
  );
}
