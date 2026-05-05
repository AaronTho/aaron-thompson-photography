export const handler = async (event) => {
  const topic = process.env.NTFY_TOPIC;
  if (!topic) {
    console.error("NTFY_TOPIC env var not set — skipping notification");
    return { statusCode: 200 };
  }

  let submission;
  try {
    submission = JSON.parse(event.body);
  } catch {
    console.error("Could not parse form submission body");
    return { statusCode: 200 };
  }

  const { name, email, phone, subject, message } = submission.data ?? {};

  const lines = [
    `From: ${name ?? "unknown"} <${email ?? "unknown"}>`,
    phone ? `Phone: ${phone}` : null,
    subject ? `Type: ${subject}` : null,
    "",
    message ?? "",
  ].filter((line) => line !== null);

  try {
    const res = await fetch(`https://ntfy.sh/${encodeURIComponent(topic)}`, {
      method: "POST",
      headers: {
        Title: "New inquiry — Aaron Thompson Photography",
        Tags: "envelope",
        Priority: "default",
        "Content-Type": "text/plain; charset=utf-8",
      },
      body: lines.join("\n"),
    });

    if (!res.ok) {
      console.error(`ntfy responded ${res.status}: ${await res.text()}`);
    }
  } catch (err) {
    console.error("Failed to reach ntfy:", err);
  }

  // Always return 200 — a notification failure shouldn't surface as a form error
  return { statusCode: 200 };
};
