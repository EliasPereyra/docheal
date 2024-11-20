import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocHeal Web App",
  description:
    "Un Sistema de gestión de turnos para los pacientes, donde pueden registrarse, agendar turnos y administrarlos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#080A10] text-slate-200 flex min-h-screen",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
