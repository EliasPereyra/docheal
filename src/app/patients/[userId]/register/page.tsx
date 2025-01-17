import Image from "next/image";

import { UserDataForm } from "@/components/CustomForms/userDataForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro | DocHeal Web App",
};

export default async function PatientForm() {
  return (
    <section className="flex w-full">
      <div className="p-8 md:p-20 flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold">¡Bienvenido!</h2>
          <p className="text-slate-300">
            En esta sección necesitas agregar todos tus datos personales y
            médicos
          </p>
        </div>
        <UserDataForm />
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
