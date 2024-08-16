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
  return (
    <div className="bg-gradient-to-r from-[hsl(224,25%,12%)] from-40% to-[hsl(0,4%,5%)] to-110% px-10 py-6 rounded-md">
      <div className="flex gap-4 align-center mb-2">
        <Image src={icon} alt="" width={40} height={40} className="" />
        <h2 className="text-3xl font-bold">{count}</h2>
      </div>
      <p>{label}</p>
    </div>
  );
}
