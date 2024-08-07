import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AppointmentForm() {
  return (
    <div className="bg-[#080A10] flex gap-72 min-h-screen items-center text-slate-200">
      <div className="flex flex-col gap-10 justify-center">
        <div>
          <h2 className="text-5xl font-bold mb-4">Hola!</h2>
          <p>Comencemos con cargar ciertos datos fundamentales.</p>
        </div>
        <form className="flex flex-col gap-4">
          <label htmlFor="nombre">Nombre completo</label>
          <Input className="bg-[#181D30] border-[#2C3558]" type="text" />

          <label htmlFor="email">Email</label>
          <Input className="bg-[#181D30] border-[#2C3558]" type="email" />

          <label htmlFor="phone">Número de teléfono</label>
          <Input className="bg-[#181D30] border-[#2C3558]" type="number" />

          <Button className="bg-[#4779D9]" type="submit">
            Comencemos
          </Button>
        </form>
      </div>
    </div>
  );
}
