import Image from "next/image";
import Link from "next/link";

export default function Logo({
  href = "/",
  w = 14,
  h = 14,
  className,
}: {
  href?: string;
  w?: number;
  h?: number;
  className?: string;
}) {
  return (
    <Link href={href}>
      <Image
        src="/assets/logo.png"
        alt="Logo oficial de la página"
        width={w}
        height={h}
        className={` ${className}`}
      />
    </Link>
  );
}
