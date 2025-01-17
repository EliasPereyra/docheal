import Image from "next/image";
import Link from "next/link";

import { getPatient } from "@/lib/actions/patient.actions";
import AppointmentForm from "@/components/CustomForms/appointmentForm";

export default async function Appointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="bg-[#080A10] w-full flex md:space-between mt-16 items-start gap-10">
      <div className="absolute left-96 top-10 w-20 h-20 md:h-96 md:w-96 blur-[150px] opacity-35 bg-[#2B3457] z-0" />
      <Image
        className="hidden md:block absolute bottom-0 left-0"
        src="/assets/5-line.svg"
        alt="Linea curvada"
        width={400}
        height={400}
      />
      <Image
        className="hidden md:block absolute top-12 right-0"
        src="/assets/6-line.svg"
        alt="Linea curvada"
        width={400}
        height={400}
      />
      <div className="mx-auto p-10 w-[40em] bg-[#0B0D15] border border-[#5F73BE] rounded-md flex flex-col gap-10 justify-center z-10">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl text-balance md:text-5xl font-bold">
              Solicita un turno
            </h2>
            <p className="text-slate-400">
              Puedes solicitar un turno para la fecha y hora que desees
            </p>
          </div>
        </div>
        <AppointmentForm
          type="crear"
          userId={userId}
          patientId={patient?.$id as string}
        />
        <Link
          className="text-[#0C8EAF] hover:underline"
          href={`/patients/${patient?.userId}/profile`}
        >
          Ir a mi perfil
        </Link>
      </div>
    </div>
  );
}
