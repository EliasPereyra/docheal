import Image from "next/image";

import Logo from "@/components/logo";
import { getPatient } from "@/lib/actions/patient.actions";
import AppointmentForm from "@/components/appointmentForm";

export default async function Appointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="bg-[#080A10] w-full flex md:space-between items-start md:items-center gap-10 md:min-h-screen">
      <div className="absolute left-20 top-10 w-20 h-20 md:h-96 md:w-96 blur-[150px] opacity-35 bg-[#2B3457] z-0"></div>
      <section className="flex flex-col gap-10 justify-center px-10 py-10 md:px-20 z-10 w-full">
        <div className="flex flex-col gap-2">
          <Logo />
          <h2 className="text-4xl text-balance md:text-5xl font-bold">
            Solicita un turno
          </h2>
          <p className="text-slate-400">
            Puedes solicitar un turno para la fecha y hora que desees.
          </p>
        </div>
        <AppointmentForm
          type="crear"
          userId={userId}
          patientId={patient?.$id}
        />
      </section>
      <div className="w-full">
        <Image
          className="h-screen object-cover hidden w-[20em] md:block absolute top-0 right-0"
          src="/assets/penthagon_pattern.jpg"
          alt="Pentagon pattern"
          width={256}
          height={212}
        />
      </div>
    </div>
  );
}
