export async function GET() {
  return new Response(
    JSON.stringify({ message: "Assistant API çalışıyor 🚀" }),
    { status: 200 }
  );
}

export async function POST(req) {
  const body = await req.json();
  return new Response(
    JSON.stringify({ reply: `Mesaj alındı: ${body.message}` }),
    { status: 200 }
  );
}
