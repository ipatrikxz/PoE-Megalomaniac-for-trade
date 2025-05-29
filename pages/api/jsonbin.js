export default async function handler(req, res) {
  const documentLink = process.env.JsonDocumentLink;
  const apiKey = process.env.JsonBinApiKey;

  try {
    const response = await fetch(documentLink, {
      headers: { "X-Access-Key": apiKey },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch JsonBin data" });
  }
}
