import Link from "next/link";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="h-auto md:min-h-screen flex flex-col gap-4 items-center p-16 md:p-24 bg-gradient-to-b from-[#070A15] to-[#07090F] w-full">
      <div className="absolute left-0 top-20 h-20 md:h-96 w-20 md:w-96 blur-[110px] opacity-20 bg-[#2B3457]"></div>
      <div className="absolute right-20 top-20 h-22 md:h-96 w-20 md:w-96 blur-[150px] opacity-15 bg-[#4B2B57]"></div>
      <Logo />
      <h1 className="text-4xl text-center text-balance md:text-5xl font-bold text-[#fff]">
        Consulta tu problema de salud
      </h1>
      <p className="text-base md:text-xl text-[#ACA4A4] text-pretty w-[20ch] md:w-[35ch] text-center">
        Reserva turnos desde cualquier lugar a través de tu dispositivo con toda
        facilidad.
      </p>
      <div className="bg-gradient-to-br from-[#518eff] from-0% via-[#599dca] via-50% to-[#6c93ff5d] hover:shadow hover:transition-shadow to-100% p-0 md:px-0.5 md:py-2.5 rounded-sm">
        <Link
          className="bg-gradient-to-r from-[#07181c] to-[#001014] hover:from-[#081d22] hover:to-[#04151a] text-[#fff] font transition-colors px-12 md:px-28 py-2 md:py-2.5 mt-5 rounded-sm"
          href="/onboarding"
        >
          Iniciar sesión
        </Link>
      </div>
    </main>
  );
}
