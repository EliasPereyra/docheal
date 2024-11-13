import Image from "next/image";
import Link from "next/link";

import { UserDataForm } from "@/components/userDataForm";
import { redirect } from "next/navigation";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

export default async function PatientForm({
  params: { userId },
}: SearchParamProps) {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/create-appointment`);

  return (
    <section className="text-slate-200 flex items-center">
      <div className="p-20 flex flex-col gap-10 w-full">
        {/* NOTE Sección del texto principal  */}
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image
              src={"/assets/docheal-logo.png"}
              alt="Logo oficial de la página"
              width={256}
              height={212}
              className="w-24 mb-6"
            />
          </Link>
          <h2 className="text-5xl font-bold">Bienvenido!</h2>
          <p>
            En esta sección necesitas agregar todos tus datos personales y
            médicos.
          </p>
        </div>
        <UserDataForm user={user} />
      </div>
      <Image
        src="/assets/imgs/doc-bg.jpg"
        alt="Imagen de instrumentos de escritorio"
        width="660"
        height="924"
        className="sticky top-0 right-0"
      />
    </section>
  );
}
