import Image from "next/image";
import Link from "next/link";

export default function Logo({ w = 14 }: { w?: number }) {
  return (
    <Link href="/">
      <Image
        src="/assets/docheal-logo.png"
        alt="Logo oficial de la página"
        width={20}
        height={20}
        className={`w-12 md:w-${w}`}
      />
    </Link>
  );
}
