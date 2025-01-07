import Image from "next/image";
import Link from "next/link";

export default function Logo({
  w = 14,
  h = 14,
  className,
}: {
  w?: number;
  h?: number;
  className?: string;
}) {
  return (
    <Link href="/">
      <Image
        src="/assets/docheal-logo.png"
        alt="Logo oficial de la página"
        width={w}
        height={h}
        className={`w-16 ${className}`}
      />
    </Link>
  );
}
