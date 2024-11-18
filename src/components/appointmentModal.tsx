"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import "react-datepicker/dist/react-datepicker.css";
import AppointmentForm from "./appointmentForm";
import { Appointment } from "@/types/appwrite.types";

export default function AppointmentModal({
  userId,
  patientId,
  title,
  type,
  appointment,
}: {
  userId: string;
  patientId: string;
  title: string;
  type: "confirmar" | "cancelar";
  appointment: Appointment;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={`${
          type === "confirmar" && "text-[#51E5FF]"
        } hover:underline`}
      >
        {title}
      </DialogTrigger>
      <DialogContent className="shad-alert-dialog bg-gradient-to-br from-50% from-[#080A10] to-[#0D101B] p-10 gap-6">
        <DialogHeader>
          <DialogTitle className="text-3xl">{title} turno</DialogTitle>
        </DialogHeader>

        <AppointmentForm
          type={type}
          userId={userId}
          patientId={patientId}
          setOpen={setOpen}
          appointment={appointment}
        />
      </DialogContent>
    </Dialog>
  );
}
