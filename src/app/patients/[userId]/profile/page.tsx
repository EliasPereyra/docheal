import { getPatient, getUser } from "@/lib/actions/patient.actions";
import ProfileForm from "./Forms/profileForm";
import Image from "next/image";
import Link from "next/link";

export default async function Profile({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  return (
    <div className="px-20 py-10 flex justify-between w-full">
      <aside className="flex flex-col gap-8 w-[20em] border-r-2">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-4xl font-bold">Perfil</h2>
          <Link href={`/patients/${userId}/create-appointment`}>
            <Image
              src="/assets/icons/plus-circle.svg"
              alt="Un icono de un signo mas en un circulo"
              width={40}
              height={40}
              className="mr-4 cursor-pointer"
              title="Generar nueva cita"
            />
          </Link>
        </div>
        {/* <Image src="" alt="Imagen de perfil" width={200} height={200} /> */}
        <div className="w-20 h-20 rounded-full bg-slate-400" />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">{patient?.fullname}</h3>
          <p className="text-slate-400">{patient?.email}</p>
          <div className="mt-2 flex flex-col gap-2 w-[5em]">
            <button className="text-left aria-selected:bg-slate-400">
              Información
            </button>
            <button className="text-left aria-selected:bg-slate-400">
              Mis Citas
            </button>
          </div>
        </div>
      </aside>

      <section className="ml-10 w-full">
        <ProfileForm patient={patient} />
      </section>
    </div>
  );
}
