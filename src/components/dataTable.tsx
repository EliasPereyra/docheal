"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "./ui/button";
import { decryptKey } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const encryptedKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("passkey")
      : null;

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey);
    if (accessKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      redirect("/");
    }
  }, [encryptedKey]);

  return (
    <div className="data-table">
      <Table className="shad-table">
        <TableHeader className="bg-[#0A0C14]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-b-0">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="text-slate-200">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className={`p-8 ${
                  row.index % 2 === 0 ? "bg-[#111522]" : "bg-[#181D30]"
                } border-none text-slate-200 hover:opacity-90 hover:bg-[#111523] data-[state=selected]:bg-[#030305]`}
                data-state={row.getIsSelected() ?? "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No hay datos</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-between border-[#2C3558]">
        <Button className="rounded-none bg-transparent">
          <Image
            src={"/assets/icons/left-arrow-circle.svg"}
            alt="Icono con una flecha apuntando a la izquierda"
            width={30}
            height={30}
          />
        </Button>
        <Button className="rounded-none bg-transparent">
          <Image
            src={"/assets/icons/right-arrow-circle.svg"}
            alt="Icono con una flecha apuntando a la derecha"
            width={30}
            height={30}
          />
        </Button>
      </div>
    </div>
  );
}
