export async function GET(request) {
  return new Response(
    JSON.stringify({ message: "Search API is working!" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
