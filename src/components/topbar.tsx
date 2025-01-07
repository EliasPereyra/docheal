import Image from "next/image";
import Logo from "./logo";

export default function Topbar() {
  return (
    <nav className="bg-[#0E111C] flex items-center justify-between px-20 py-4 w-full md:px-20 md:py-2">
      <Logo w={80} />
      <Image
        src="/assets/icons/user-circle.svg"
        alt="Icono de usuario"
        width={30}
        height={30}
      />
    </nav>
  );
}
