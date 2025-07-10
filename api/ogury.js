export default async function handler(req, res) {
  const API_KEY = "6c9f5f1e048f3b27a6114661d7b8e0e0711e9b538284431286a0a2fec5521fe2_41d79f4f-89a5-425c-84bc-ead3a405a407";

  try {
    const oguryRes = await fetch("https://reporting.api.ogury.io/v2/statistics", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await oguryRes.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", message: error.message });
  }
}
