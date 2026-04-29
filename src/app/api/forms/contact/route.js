export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!name || !email || !subject || !message) {
    return new Response("Missing required fields.", {
      status: 400,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  return new Response("OK", {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
