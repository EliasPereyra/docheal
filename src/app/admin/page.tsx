import DataTable from "@/components/dataTable";
import StateCard from "@/components/stateCard";
import Topbar from "@/components/topbar";

const patients = [
  {
    id: 1,
    name: "Paciente 1",
    date: "2022-01-01",
    status: "Activo",
    actions: "Ver",
  },
  {
    id: 2,
    name: "Paciente 2",
    date: "2022-01-01",
    status: "Activo",
    actions: "Ver",
  },
];

const headers = [
  {
    accessorKey: "Paciente",
    header: "Paciente",
  },
  {
    accessorKey: "Fecha",
    header: "Fecha",
  },
  {
    accessorKey: "Estado",
    header: "Estado",
  },
  {
    accessorKey: "Acciones",
    header: "Acciones",
  },
];

export default function AdminPage() {
  return (
    <section>
      <Topbar />

      <main className="flex flex-col gap-16 items-center p-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold">Bienvenido John Doe!</h2>
          <p className="text-slate-400">
            En esta sección necesitas agregar todos tus datos personales y
            médicos.
          </p>
        </div>

        {/* TODO: agregar efecto hover para las tarjetas */}
        <div className="flex gap-4">
          <StateCard
            count={78}
            label="Total de turnos anotados"
            icon={"/assets/icons/calendar.svg"}
            type="appointment"
          />
          <StateCard
            count={15}
            label="Total de turnos pendientes"
            icon={"/assets/icons/time.svg"}
            type="pending"
          />
          <StateCard
            count={9}
            label="Total de turnos cancelados"
            icon={"/assets/icons/danger-triangle.svg"}
            type="cancelled"
          />
        </div>

        {/* TODO: Agregar los estilos a la tabla y agregar datos mockeados */}
        <div>
          <DataTable columns={headers} data={patients} />
        </div>
      </main>
    </section>
  );
}
