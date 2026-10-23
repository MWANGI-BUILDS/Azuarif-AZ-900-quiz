// Leave empty to use the pre-written examples (the demo never breaks).
// Paste your Supabase edge function URL here only if the live AI version is working.
const EXPLAIN_API_URL = "";

async function getAfricanExample(q) {
  if (!EXPLAIN_API_URL) return q.africanExample;
  try {
    const res = await fetch(EXPLAIN_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q.question, explanation: q.explanation })
    });
    if (!res.ok) throw new Error("Bad response");
    const data = await res.json();
    return data.example || q.africanExample;
  } catch (err) {
    return q.africanExample;
  }
}