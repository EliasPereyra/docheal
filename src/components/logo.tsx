import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/docheal-logo.png"
        alt="Logo oficial de la página"
        width={206}
        height={162}
        className="w-20 md:w-14 mb-6"
      />
    </Link>
  );
}
