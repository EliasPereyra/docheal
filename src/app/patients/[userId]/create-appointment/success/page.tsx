"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Logo from "@/components/logo";

export default function Success() {
  const userId = useParams().userId as string;

  return (
    <div className="bg-gradient-to-b from-[#070A15] to-[#080A10] h-screen flex flex-col gap-10 items-center py-32">
      <div className="absolute left-16 top-10 w-20 h-20 md:h-96 md:w-96 blur-[150px] opacity-45 bg-[#2B3457]"></div>
      <div className="absolute right-16 top-10 w-20 h-20 md:h-96 md:w-96 blur-[200px] opacity-45 bg-[#4B2B57]"></div>
      <Logo />
      <div className="text-center w-fit md:w-[70ch]">
        <Image
          src="/assets/icons/ep_success-filled.svg"
          alt="Icono de exito"
          width={64}
          height={64}
          className="md-20 md:w-32 mb-6 mx-auto"
        />
        <h2 className="text-4xl text-balance md:text-5xl font-bold mb-4">
          Tu <span className="text-[#51E5FF]">solicitud de turno</span> ha sido
          registrado exitosamente
        </h2>
        <h3 className="text-slate-400 text-lg font-light">
          Recibirás una confirmación de tu solicitud en breve.
        </h3>
      </div>
      <Link
        href="/"
        className="flex gap-2 font-bold hover:underline transition-"
      >
        Volver al inicio{" "}
        <Image
          src="/assets/icons/line-md_arrow-right.svg"
          alt="Icono de flecha"
          width={24}
          height={24}
          className="inline"
        />
      </Link>
    </div>
  );
}
