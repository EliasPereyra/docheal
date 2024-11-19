"use client";

import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="h-screen flex flex-col gap-10 items-center py-32">
      <Link href="/">
        <Image
          src="/assets/docheal-logo.png"
          alt="Logo oficial de la página"
          width={256}
          height={212}
          className="w-24 mb-6"
        />
      </Link>
      <div className="text-center w-[70ch]">
        <Image
          src="/assets/icons/ep_user-filled.svg"
          alt="Icono de usuario"
          width={64}
          height={64}
          className="w-32 mb-6 mx-auto"
        />
        <h1 className="text-5xl text-balance font-bold mb-4">Tu perfil</h1>
        <h3 className="text-slate-400 text-lg font-light">
          Aquí podras ver tus datos personales y contactos
        </h3>
      </div>
    </div>
  );
}
