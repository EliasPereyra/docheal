import Link from "next/link";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center p-24 bg-gradient-to-b from-[#070A15] to-[#07090F] w-full">
      <div className="absolute left-0 top-0 h-96 w-96 blur-[150px] opacity-45 bg-[#2B3457]"></div>
      <div className="absolute right-0 top-0 h-96 w-96 blur-[200px] opacity-45 bg-[#4B2B57]"></div>
      <Logo />
      <h1 className="text-5xl font-bold text-[#fff]">
        Consulta tu problema de salud
      </h1>
      <p className="text-xl text-[#ACA4A4] w-[35ch] text-center">
        Reserva turnos desde cualquier lugar a través de tu dispositivo con toda
        facilidad.
      </p>
      <div className="bg-gradient-to-br from-[#A251FF] from-0% via-[#CA59B7] via-50% to-[#FF6C6C] to-100% px-0.5 py-2 rounded-sm">
        <Link
          className="bg-[#0C8EAF] text-[#fff] hover:bg-[#13bbe6] transition-colors px-32 py-2 mt-5 rounded-sm "
          href="/onboarding"
        >
          Iniciar sesión
        </Link>
      </div>
    </main>
  );
}
