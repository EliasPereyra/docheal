"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogFooter,
} from "./ui/alert-dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { decryptKey, encryptKey } from "@/lib/utils";

export default function KeyPassModal() {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

  const encryptedKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("passkey")
      : null;

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey);
    console.log(process.env.NEXT_PUBLIC_ADMIN_PASSKEY?.toString());

    if (path) {
      // Si tengo la clave de acceso, me redirige directo a la pagina admin, sino abre el dialog.
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
        setOpen(false);
        router.push("/admin");
      } else {
        setOpen(true);
      }
    }
  }, [encryptedKey]);

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Verifico si el passkey es igual al de la variable de entorno.
    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      // Guardo el passkey en el localStorage.
      const encryptedKey = encryptKey(passkey);
      localStorage.setItem("passkey", encryptedKey);

      setOpen(false);
    } else {
      setError("La clave es incorrecta. Por favor intenta de nuevo.");
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Verifica tu OTP
            <Link href="/onboarding?admin=false">
              <Image
                src="assets/icons/close-circle.svg"
                alt="Icono de cerrar"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </Link>
          </AlertDialogTitle>
          <AlertDialogDescription>
            Por favor verifica tu OTP que enviamos a tu número de teléfono.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot index={0} className="shad-otp-slot" />
              <InputOTPSlot index={1} className="shad-otp-slot" />
              <InputOTPSlot index={2} className="shad-otp-slot" />
              <InputOTPSlot index={3} className="shad-otp-slot" />
              <InputOTPSlot index={4} className="shad-otp-slot" />
              <InputOTPSlot index={5} className="shad-otp-slot" />
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="shad-error text-red-500 mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => validatePasskey(e)}
            className="w-full"
          >
            Ingresar la Clave Admin
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
