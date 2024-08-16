import Image from "next/image";
import Link from "next/link";

import { RegisterForm } from "@/components/registerForm";
import KeyPassModal from "@/components/keyPassModal";

export default function Onboarding({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";

  return (
    <section className="flex items-center text-slate-200 p-20">
      {isAdmin && <KeyPassModal />}

      <div className="flex flex-col gap-10 justify-center">
        <div className="flex flex-col gap-2">
          <Image
            src="/assets/docheal-logo.png"
            alt="Logo oficial de la página"
            width={256}
            height={212}
            className="w-24 mb-6"
          />
          <h2 className="text-5xl font-bold mb-2">Hola!</h2>
          <p className="text-slate-300">
            Comencemos con cargar ciertos datos fundamentales.
          </p>
        </div>
        {/* El registro o inicio de sesion */}
        <RegisterForm />
        {/* TODO: agregar el link para el admin */}
        <div>
          <Link href="/onboarding/?admin=true">Admin</Link>
        </div>
      </div>
    </section>
  );
}
