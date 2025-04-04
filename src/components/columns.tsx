"use client";

import { ColumnDef } from "@tanstack/react-table";
import AppointmentModal from "./appointmentModal";
import StateBage from "./stateBadge";
import { formatDate } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p>{row.id}</p>;
    },
  },
  {
    accessorKey: "paciente",
    header: "Paciente",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="flex gap-2 items-center">
          <div className="text-2xl font-bold text-white bg-[#76A5FF] rounded-full w-10 h-10 flex justify-center items-center">
            {appointment.patient.fullname.charAt(0)}
          </div>
          <p>{appointment.patient.fullname}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p>{formatDate(appointment.appointmentDate).dateTime}</p>;
    },
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => {
      const appointment = row.original;
      return <StateBage text={appointment.status} />;
    },
  },
  {
    accessorKey: "acciones",
    header: "Acciones",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="flex gap-2">
          <AppointmentModal
            userId={appointment.userId!}
            patientId={appointment.patient.$id}
            title="Programar"
            type="confirmar"
            appointment={appointment}
          />
          <AppointmentModal
            userId={appointment.userId!}
            patientId={appointment.patient.$id}
            title="Cancelar"
            type="cancelar"
            appointment={appointment}
          />
        </div>
      );
    },
  },
];
