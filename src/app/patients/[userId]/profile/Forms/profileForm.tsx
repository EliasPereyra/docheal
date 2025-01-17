"use client";

import { useState } from "react";
import clsx from "clsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalForm from "./personalForm";
import MedicalForm from "./medicalForm";
import IdentificationForm from "./identificationForm";
import { PersonalFormSchemaValidation } from "@/lib/validation";
import { patientPersonalFormDefaultValues } from "@/constants";

export default function ProfileForm({ patient }: { patient: any }) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PersonalFormSchemaValidation>>({
    resolver: zodResolver(PersonalFormSchemaValidation),
    defaultValues: patientPersonalFormDefaultValues,
  });

  const onSubmit = async (
    values: z.infer<typeof PersonalFormSchemaValidation>
  ) => {
    let formData;

    formData = new FormData();

    const patientData = {
      userId: patient.$id,
      fullname: values.fullName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      birthDate: new Date(values.birthDate),
      gender: values.gender,
      address: values.address,
      profession: values.profession,
      civilStatus: values.civilStatus,
      phoneNumberAlt: values.phoneNumberAlt,
    };
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Tabs defaultValue="personal">
          <TabsList className="w-full grid grid-cols-3 bg-[#151d3b] rounded-lg">
            <TabsTrigger
              className={clsx("aria-selected:bg-[#181D30] py-2 rounded-lg")}
              value="personal"
            >
              Información Personal
            </TabsTrigger>
            <TabsTrigger
              className={clsx("aria-selected:bg-[#181D30] py-2 rounded-lg")}
              value="medical"
            >
              Información Médica
            </TabsTrigger>
            <TabsTrigger
              className={clsx("aria-selected:bg-[#181D30] py-2 rounded-lg")}
              value="identification"
            >
              Identificación y Verificación
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <PersonalForm patient={patient} form={form} />
          </TabsContent>

          <TabsContent value="medical">
            <MedicalForm form={form} />
          </TabsContent>

          <TabsContent value="identification">
            <IdentificationForm form={form} />
          </TabsContent>
        </Tabs>
        <Button disabled={isLoading} className="bg-[#0C8EAF]" type="submit">
          {isLoading ? "Cargando..." : "Guardar"}
        </Button>
      </form>
    </Form>
  );
}
