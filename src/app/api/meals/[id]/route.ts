import { NextResponse } from "next/server";

const BASE_URL = process.env.BACKEND_URL;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!BASE_URL) {
    return NextResponse.json({ error: "Missing BACKEND_URL" }, { status: 500 });
  }
  const { id } = await params;
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!BASE_URL) {
    return NextResponse.json({ error: "Missing BACKEND_URL" }, { status: 500 });
  }
  const body = await request.json();
  const { id } = await params;
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!BASE_URL) {
    return NextResponse.json({ error: "Missing BACKEND_URL" }, { status: 500 });
  }
  const { id } = await params;
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  const text = await res.text();
  try {
    const json = text ? JSON.parse(text) : { ok: true };
    return NextResponse.json(json, { status: res.status });
  } catch {
    return NextResponse.json({ ok: true }, { status: res.status });
  }
}
