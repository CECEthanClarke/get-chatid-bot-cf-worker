
export async function sendMessage(token, body) {
  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}