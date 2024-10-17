import Image from "next/image";

interface StateCardProps {
  count: number;
  label: string;
  icon: string;
  type: "appointment" | "pending" | "cancelled";
}

export default function StateCard({
  count = 0,
  label,
  icon,
  type,
}: StateCardProps) {
  switch (type) {
    case "appointment":
      return (
        <div className="bg-gradient-to-r from-[hsl(43,61%,44%)] from-40% to-[hsl(28,70%,29%)] border border-[#C0982F] to-110% px-10 py-6 rounded-md">
          <div className="flex gap-4 align-center mb-2">
            <Image src={icon} alt="" width={40} height={40} className="" />
            <h2 className="text-3xl font-bold">{count}</h2>
          </div>
          <p>{label}</p>
        </div>
      );
    case "pending":
      return (
        <div className="bg-gradient-to-r from-[hsl(219,51%,50%)] from-40% to-[hsl(234,45%,18%)] border border-[#4779D9] to-110% px-10 py-6 rounded-md">
          <div className="flex gap-4 align-center mb-2">
            <Image src={icon} alt="" width={40} height={40} className="" />
            <h2 className="text-3xl font-bold">{count}</h2>
          </div>
          <p>{label}</p>
        </div>
      );
    case "cancelled":
      return (
        <div className="bg-gradient-to-r from-[hsl(0,54%,52%)] from-40% to-[hsl(0,50%,31%)] border border-[#FC5E5E] to-110% px-10 py-6 rounded-md">
          <div className="flex gap-4 align-center mb-2">
            <Image src={icon} alt="" width={40} height={40} className="" />
            <h2 className="text-3xl font-bold">{count}</h2>
          </div>
          <p>{label}</p>
        </div>
      );
  }
}
