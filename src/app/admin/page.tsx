import DataTable from "@/components/dataTable";
import StateCard from "@/components/stateCard";
import Topbar from "@/components/topbar";
import { columns } from "@/components/columns";
import { getLatestAppointments } from "@/lib/actions/appointment.actions";

export default async function AdminPage() {
  const latestAppointments = await getLatestAppointments();

  return (
    <section>
      <Topbar />

      <main className="flex flex-col gap-16 items-center p-16">
        <div className="flex flex-col gap-2 items-start w-full">
          <h2 className="text-5xl font-bold">
            Bienvenido <span className="text-[#28C6EF]">John Doe!</span>
          </h2>
          <p className="text-slate-400">
            En esta sección puedes ver todos los turnos de cada paciente y
            administrarlos.
          </p>
        </div>

        {/* TODO: agregar efecto hover para las tarjetas */}
        <div className="flex justify-between gap-4 w-full">
          <StateCard
            count={latestAppointments.scheduledCount}
            label="Total de turnos anotados"
            icon={"/assets/icons/calendar.svg"}
            type="scheduled"
          />
          <StateCard
            count={latestAppointments.pendingCount}
            label="Total de turnos pendientes"
            icon={"/assets/icons/time.svg"}
            type="pending"
          />
          <StateCard
            count={latestAppointments.cancelledCount}
            label="Total de turnos cancelados"
            icon={"/assets/icons/danger-triangle.svg"}
            type="cancelled"
          />
        </div>

        <DataTable columns={columns} data={latestAppointments.documents} />
      </main>
    </section>
  );
}
