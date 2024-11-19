import Image from "next/image";

import { UserDataForm } from "@/components/userDataForm";
import Logo from "@/components/logo";
import { redirect } from "next/navigation";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

export default async function PatientForm({
  params: { userId },
}: SearchParamProps) {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/create-appointment`);

  return (
    <section className="flex items-center">
      <div className="p-8 md:p-20 flex flex-col gap-10 w-full">
        {/* NOTE Sección del texto principal  */}
        <div className="flex flex-col gap-2">
          <Logo />
          <h2 className="text-4xl md:text-5xl font-bold">Bienvenido!</h2>
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
        className="flex-none md:sticky top-0 right-0"
      />
    </section>
  );
}
