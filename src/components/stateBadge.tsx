import Image from "next/image";

export default function stateBadge({ text }: { text: string }) {
  switch (text) {
    case "pendiente":
      return (
        <div className="flex gap-2 bg-[#121B2C] p-2 rounded-full w-fit">
          <Image
            src="/assets/icons/time.svg"
            alt="Icono de reloj"
            width={20}
            height={20}
          />
          <p className="text-[#76A5FF]">{text}</p>
        </div>
      );
    case "anotado":
      return (
        <div className="flex gap-2 bg-[#2C2F0F] p-2 rounded-full w-fit">
          <Image
            src="/assets/icons/calendar.svg"
            alt="Icono de un calendario"
            width={20}
            height={20}
          />
          <p className="text-[#F6CA57]">{text}</p>
        </div>
      );
    case "cancelado":
      return (
        <div className="flex gap-2 bg-[#271111] p-2 rounded-full w-fit">
          <Image
            src="/assets/icons/danger-triangle.svg"
            alt="Icono de alerta"
            width={20}
            height={20}
          />
          <p className="text-[#FF6C6C]">{text}</p>
        </div>
      );
  }
}
