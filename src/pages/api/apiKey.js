export default function ApiKey(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (!apiKey) {
    return Error("API Key not found");
  }
  return apiKey;
}