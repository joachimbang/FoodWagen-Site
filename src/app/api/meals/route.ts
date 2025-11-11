import { NextResponse } from "next/server";

const BASE_URL = process.env.BACKEND_URL;

export async function GET(request: Request) {
  if (!BASE_URL) {
    return NextResponse.json({ error: "Missing BACKEND_URL" }, { status: 500 });
  }
  const url = new URL(request.url);
  const query = url.search; // includes leading ? if present
  const target = `${BASE_URL}${query}`;
  const res = await fetch(target, { cache: "no-store" });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function POST(request: Request) {
  if (!BASE_URL) {
    return NextResponse.json({ error: "Missing BACKEND_URL" }, { status: 500 });
  }
  const body = await request.json();
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
