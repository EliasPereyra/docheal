"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Logo from "./logo";
import { Button } from "./ui/button";
import { useUser } from "@/context/UserContext";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/onboarding");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="bg-[#0E111C] flex items-center justify-between px-20 py-4 w-full md:px-20 md:py-1 z-50">
      <Logo href="" w={50} h={50} />
      <Button
        className="bg-transparent hover:bg-transparent"
        onClick={() => setOpen(!open)}
      >
        <Image
          src="/assets/icons/user-circle.svg"
          alt="Icono de usuario"
          width={30}
          height={30}
          className="text-slate-300"
        />
      </Button>
      {open && (
        <div className="border border-[#5F73BE] absolute top-12 right-10 bg-[#0E111C] px-4 py-6 rounded-lg flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <p className="text-sm text-slate-300">
              <strong>{user?.name}</strong>
            </p>
            <p className="text-xs text-slate-500">{user?.email}</p>
          </div>
          <Button
            className="w-fit text-sm text-slate-300 hover:text-slate-100 hover:underline flex items-center gap-2 p-0 bg-transparent hover:bg-transparent"
            onClick={() => {
              handleLogout();
              setOpen(false);
            }}
          >
            <Image
              src="/assets/icons/sign-out.svg"
              alt="Icono de usuario"
              width={25}
              height={25}
              className=""
            />
            Salir
          </Button>
        </div>
      )}
    </nav>
  );
}
