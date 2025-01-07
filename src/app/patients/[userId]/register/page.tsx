import Image from "next/image";
import { redirect } from "next/navigation";

import { UserDataForm } from "@/components/CustomForms/userDataForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";
import Logo from "@/components/logo";
import { Metadata } from "next";
import { toast } from "sonner";

export const metadata: Metadata = {
  title: "Registro | DocHeal Web App",
};

export default async function PatientForm({
  params: { userId },
}: SearchParamProps) {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) {
    redirect(`/patients/${userId}/create-appointment`);
  }

  return (
    <section className="flex w-full">
      <div className="p-8 md:p-20 flex flex-col gap-10 w-full">
        {/* NOTE Sección del texto principal  */}
        <div className="flex flex-col gap-2">
          <Logo w={100} h={100} className="mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold">¡Bienvenido!</h2>
          <p className="text-slate-300">
            En esta sección necesitas agregar todos tus datos personales y
            médicos
          </p>
        </div>
        <UserDataForm user={user} />
      </div>
      <div className="">
        <Image
          src="/assets/figure.png"
          alt="Imagen de instrumentos de escritorio"
          width="329"
          height="1232"
          className=" top-0 right-0 object-cover"
        />
      </div>
    </section>
  );
}
