"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import CustomFormField, { FormFieldType } from "./CustomFormField";
import { Button } from "./ui/button";
import { getAppointmentSchema } from "@/lib/validation";
import {
  createAppointment,
  updateAppointment,
} from "@/lib/actions/appointment.actions";
import { Appointment } from "@/types/appwrite.types";

export default function AppointmentForm({
  userId,
  patientId,
  type = "crear",
  appointment,
  setOpen,
}: {
  userId: string;
  patientId: string;
  type: "crear" | "confirmar" | "cancelar";
  appointment?: Appointment;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const AppointmentFormSchemaValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormSchemaValidation>>({
    resolver: zodResolver(AppointmentFormSchemaValidation),
    defaultValues: {
      reason: appointment ? appointment?.reason : "",
      additionalNotes: appointment ? appointment?.additionalNotes : "",
      appointmentDate: appointment
        ? new Date(appointment?.appointmentDate)
        : new Date(Date.now()),
      cancellationReason: appointment?.cancellationReason || "",
    },
  });

  const onSubmitHandler = async (
    values: z.infer<typeof AppointmentFormSchemaValidation>
  ) => {
    setIsLoading(true);

    let status;
    switch (type) {
      case "confirmar":
        status = "anotado";
        break;
      case "cancelar":
        status = "cancelado";
        break;
      default:
        status = "pendiente";
    }

    try {
      if (type === "crear" && patientId) {
        const appointmentQuest = {
          patient: patientId,
          reason: values.reason!,
          additionalNotes: values.additionalNotes,
          appointmentDate: values.appointmentDate,
          userId: userId,
        };

        const appointment = await createAppointment(appointmentQuest);

        if (appointment) {
          setIsLoading(false);
          toast.success("Turno creado exitosamente");
          router.push(`/patients/${patientId}/create-appointment/success`);
        }
      } else {
        const appointmentToUpdate = {
          userId,
          appointmentId: appointment?.$id!,
          appointment: {
            reason: values.reason!,
            additionalNotes: values.additionalNotes,
            appointmentDate: values.appointmentDate,
            cancellationReason: values.cancellationReason,
            status,
          },
          type,
        };

        const updatedAppointment = await updateAppointment(appointmentToUpdate);

        if (updatedAppointment) {
          setOpen && setOpen(false);
          form.reset();
          toast.success("Turno actualizado exitosamente");
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
          {type === "cancelar" ? (
            <CustomFormField
              name="cancellationReason"
              control={form.control}
              label="Razón para cancelar el turno"
              fieldType={FormFieldType.TEXTAREA}
              placeholder="Ejemplo: Tuve un imprevisto y no pude asistir."
            />
          ) : (
            <>
              <CustomFormField
                control={form.control}
                name="reason"
                label="Razón de la consulta"
                placeholder="Ejemplo: Dolor de cabeza"
                fieldType={FormFieldType.TEXTAREA}
              />

              <CustomFormField
                control={form.control}
                name="additionalNotes"
                label="Comentarios/Notas adicionales"
                placeholder="Ejemplo: Tuve un dolor de cabeza desde ayer."
                fieldType={FormFieldType.TEXTAREA}
              />

              <CustomFormField
                control={form.control}
                name="appointmentDate"
                label="Fecha para el Turno"
                fieldType={FormFieldType.DATE_PICKER}
              />
            </>
          )}

          <Button
            disabled={isLoading}
            className={`${type === "cancelar" && "bg-[#FF6C6C]"} bg-[#0C8EAF]`}
            type="submit"
          >
            {isLoading
              ? "Cargando..."
              : type === "crear"
              ? "Solicitar"
              : type === "confirmar"
              ? "Confirmar"
              : "Cancelar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
