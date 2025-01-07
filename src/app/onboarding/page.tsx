import Image from "next/image";
import Link from "next/link";

import { RegisterForm } from "@/components/CustomForms/registerForm";
import KeyPassModal from "@/components/keyPassModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding | DocHeal Web App",
  description:
    "Un Sistema de gestión de turnos para los pacientes, donde pueden registrarse, agendar turnos y administrarlos.",
};

export default function Onboarding({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";

  return (
    <section className="w-full flex items-center text-slate-200 p-10 md:p-20">
      {isAdmin && <KeyPassModal />}

      <div className="mx-auto p-8 w-[40em] bg-[#0B0D15] border border-[#5F73BE] rounded-md flex flex-col gap-10 justify-center">
        <Image
          className="absolute top-0 left-0"
          src="/assets/3-line.svg"
          alt="Linea curvada"
          width={300}
          height={300}
        />
        <Image
          className="absolute bottom-0 right-0"
          src="/assets/4-line.svg"
          alt="Linea curvada"
          width={200}
          height={200}
        />
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold mb-2">¡Bienvenido!</h2>
            <p className="text-slate-300">
              Aqui puedes registrarte o iniciar sesión.
            </p>
          </div>
          <Link href="/">
            <Image
              src="/assets/docheal-logo.png"
              alt="Logo oficial de la página"
              width={156}
              height={112}
              className="w-16 mb-6"
              priority
            />
          </Link>
        </div>
        <RegisterForm />
        <Link
          href="/onboarding?admin=true"
          className="text-[#0C8EAF] transition-colors hover:underline"
        >
          Admin
        </Link>
      </div>
    </section>
  );
}
