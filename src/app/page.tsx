import Link from "next/link";
import Logo from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-auto md:min-h-screen flex flex-col gap-4 items-center p-16 md:p-24 bg-gradient-to-b from-[#0D1428] to-[#080A11] w-full">
      <div className="absolute left-0 top-20 h-20 md:h-96 w-20 md:w-96 blur-[70px] opacity-20 bg-[#2B3457]"></div>
      <div className="absolute right-20 top-20 h-22 md:h-96 w-20 md:w-96 blur-[70px] opacity-15 bg-[#4B2B57]"></div>
      <Image
        className="absolute left-0 top-0"
        src="/assets/1-line.svg"
        alt="A curved line"
        width={400}
        height={400}
      />
      <Image
        className="absolute right-0 top-0"
        src="/assets/2-line.svg"
        alt="A curved line"
        width={400}
        height={400}
      />
      <Logo w={100} h={100} className="mb-6" />
      <h1 className="text-3xl text-center w-[15ch] md:text-5xl font-bold text-[#fff]">
        Consulta tu problema de salud
      </h1>
      <p className="text-base md:text-base text-[#ACA4A4] text-pretty w-[20ch] md:w-[35ch] text-center">
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

      <div>
        <ol
          className="flex gap-8 justify-center mt-24 relative before:absolute before:w-full before:-top-4 before:content-[''] before:bg-gradient-to-r before:from-[#53C3F3] before:via-[#9F4EE5] before:via-25% before:via-[#E34BE9] before:via-50% before:to-[#EF4C54] before:h-1"
          type="1"
        >
          <li className="w-[27ch]">
            <h3 className="text-2xl text-[#53C3F3] before:content-['1.'] before:mr-1">
              Regístrate en <strong>DocHeal</strong>
            </h3>
            <p className="text-[#9dddf9ec] mt-2">
              Regístrate con tu email y número de celular
            </p>
          </li>
          <li className="w-[27ch]">
            <h3 className="text-2xl text-[#9F4EE5] before:content-['2.'] before:mr-1">
              Registra todos tus <strong>datos médicos</strong>
            </h3>
            <p className="text-[#C597EDec] mt-2">
              Podrás registrar todos tus datos médicos y actualizarlos cuando
              quieras
            </p>
          </li>
          <li className="w-[27ch]">
            <h3 className="text-2xl text-[#E34BE9] before:content-['3.'] before:mr-1">
              Reserva una <strong>cita</strong> con el doctor
            </h3>
            <p className="text-[#D39BD6ec] mt-2">
              Podrás registrar una cita en una fecha disponible y recibirás una
              confirmación
            </p>
          </li>
          <li className="w-[27ch]">
            <h3 className="text-2xl text-[#EF4C54] before:content-['4.'] before:mr-1">
              Serás <strong>notificado</strong> el día de la cita
            </h3>
            <p className="text-[#E99095ec] mt-2">
              Recibirás una notificación cuando el doctor confirme la cita
            </p>
          </li>
        </ol>
      </div>

      <footer className="absolute bottom-4">
        <small className="text-[#757575]">
          Diseñado y Desarrollado por{" "}
          <a
            href="https://github.com/EliasPereyra"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Elias Pereyra</strong>
          </a>
        </small>
      </footer>
    </main>
  );
}
