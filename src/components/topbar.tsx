export default function Topbar() {
  return (
    <nav className="bg-[#0E111C] flex justify-between px-20 py-4 w-full">
      {/* TODO: Tiene dos elements: logo y sesion del usuario */}
      <h3 className="text-slate-300 font-bold">DocHeal</h3>
      <div className="bg-slate-400 p-2 rounded-full"></div>
    </nav>
  );
}
