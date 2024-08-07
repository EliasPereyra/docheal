import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AppointmentForm() {
  return (
    <div className="bg-[#080A10] flex gap-72 min-h-screen items-center text-slate-200">
      <div className="flex flex-col gap-10 justify-center">
        <div>
          <h2 className="text-5xl font-bold mb-4">Hola!</h2>
          <p>Crea un nuevo turno.</p>
        </div>
        <form className="flex flex-col gap-4">
          <label htmlFor="nombre">Razón de la consulta</label>
          <Input className="bg-[#181D30] border-[#2C3558]" type="text" />

          <label htmlFor="email">Comentarios/Notas adicionales</label>
          <Textarea className="bg-[#181D30] border-[#2C3558]" />

          <label htmlFor="phone">Fecha para el Turno</label>
          <Input className="bg-[#181D30] border-[#2C3558]" type="number" />

          <Button className="bg-[#4779D9]" type="submit">
            Generar turno
          </Button>
        </form>
      </div>
    </div>
  );
}
