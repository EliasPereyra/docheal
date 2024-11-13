"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import CustomFormField, { FormFieldType } from "./CustomFormField";
import { Button } from "./ui/button";
import { CreateAppointFormSchemaValidation } from "@/lib/validation";
import { createAppointment } from "@/lib/actions/appointment.actions";

export default function AppointmentForm({
  userId,
  patientId,
}: {
  userId: string;
  patientId: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof CreateAppointFormSchemaValidation>>({
    resolver: zodResolver(CreateAppointFormSchemaValidation),
    defaultValues: {
      reason: "",
      additionalNotes: "",
      appointmentDate: new Date(),
      status: "pendiente",
    },
  });

  const onSubmitHandler = async (
    values: z.infer<typeof CreateAppointFormSchemaValidation>
  ) => {
    setIsLoading(true);

    try {
      if (patientId) {
        const appointmentQuest = {
          patient: patientId,
          reason: values.reason,
          additionalNotes: values.additionalNotes,
          appointmentDate: values.appointmentDate,
          userId: userId,
          status: values.status,
        };

        const appointment = await createAppointment(appointmentQuest);

        if (appointment) {
          setIsLoading(false);
          toast.success("Turno creado exitosamente");
          router.push(`/patients/${patientId}/create-appointment/success`);
        }
      }
    } catch (error) {
      console.error("Error al crear el turno: ", error);
    }
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmitHandler)}
        >
          <CustomFormField
            control={form.control}
            name="reason"
            label="Razón de la consulta"
            fieldType={FormFieldType.TEXTAREA}
          />

          <CustomFormField
            control={form.control}
            name="additionalNotes"
            label="Comentarios/Notas adicionales"
            fieldType={FormFieldType.TEXTAREA}
          />

          <CustomFormField
            control={form.control}
            name="appointmentDate"
            label="Fecha para el Turno"
            fieldType={FormFieldType.DATE_PICKER}
          />

          <Button disabled={isLoading} className="bg-[#0C8EAF]" type="submit">
            {isLoading ? "Cargando..." : "Solicitar Turno"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
