import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Se ha cerrado la sesión" });

  response.cookies.delete("authjs.session-token");

  return response;
}
