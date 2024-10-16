import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center p-24 bg[#070A15]">
      <div className="absolute left-0 top-0 h-96 w-96 blur-[150px] opacity-45 bg-[#2B3457]"></div>
      <div className="absolute right-0 top-0 h-96 w-96 blur-[200px] opacity-45 bg-[#4B2B57]"></div>
      <Link href="/">
        <Image
          src="/assets/docheal-logo.png"
          alt="Logo oficial de la página"
          width={246}
          height={202}
          className="w-24 mb-6"
        />
      </Link>
      <h1 className="text-4xl font-bold">Bienvenido a DocHeal</h1>
      <p className="text-xl text-[#ACA4A4] w-[35ch] text-center">
        Reserva turnos desde cualquier lugar a través de tu dispositivo con toda
        facilidad.
      </p>
      <Link
        className="bg-[#4779D9] px-32 py-2 mt-5 rounded-sm"
        href="/onboarding"
      >
        Iniciar sesión
      </Link>
    </main>
  );
}
