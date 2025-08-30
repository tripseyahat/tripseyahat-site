export async function GET() {
  return Response.json({ message: "Search API is working!" });
}

export async function POST(req) {
  const data = await req.json();
  // Normalde burada gerçek arama yapılır.
  return Response.json({ ok: true, received: data });
}
