import Image from "next/image";

interface StateCardProps {
  count: number;
  label: string;
  icon: string;
  type: "scheduled" | "pending" | "cancelled";
}

export default function StateCard({
  count = 0,
  label,
  icon,
  type,
}: StateCardProps) {
  switch (type) {
    case "scheduled":
      return (
        <div className="p-0.5 bg-gradient-to-br from-[#2C3558] from-0% to-[#2c355841] to-100% rounded-md">
          <div className="bg-gradient-to-bl from-[#282C3B] from-0% via-[#5B543F] via-67% to-[#2B2F3E] to-100% px-20 py-8 rounded-md">
            <div className="flex gap-4 align-center mb-2">
              <Image src={icon} alt="" width={40} height={40} />
              <h2 className="text-4xl font-bold">{count}</h2>
            </div>
            <p className="text-lg">{label}</p>
          </div>
        </div>
      );
    case "pending":
      return (
        <div className="p-0.5 bg-gradient-to-br from-[#2C3558] from-0% to-[#2c355841] to-100% rounded-md">
          <div className="bg-gradient-to-br from-[#282C3B] from-0% via-[#3F4F6E] via-67% to-[#2B2F3E] to-100% px-20 py-8 rounded-md">
            <div className="flex gap-4 align-center mb-2">
              <Image src={icon} alt="" width={40} height={40} className="" />
              <h2 className="text-4xl font-bold">{count}</h2>
            </div>
            <p className="text-lg">{label}</p>
          </div>
        </div>
      );
    case "cancelled":
      return (
        <div className="p-0.5 bg-gradient-to-br from-[#2C3558] from-0% to-[#2c355841] to-100% rounded-md">
          <div className="bg-gradient-to-br from-[#282C3B] from-0% via-[#5A3F3F] via-67% to-[#2B2F3E] to-100% px-20 py-8 rounded-md">
            <div className="flex gap-4 align-center mb-2">
              <Image src={icon} alt="" width={40} height={40} className="" />
              <h2 className="text-4xl font-bold">{count}</h2>
            </div>
            <p className="text-lg">{label}</p>
          </div>
        </div>
      );
  }
}
