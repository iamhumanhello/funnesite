// Function to safely call your new backend proxy
async function askAI(userPrompt) {
  const proxyUrl = "https://vercel.app";

  try {
    const response = await fetch(proxyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: userPrompt })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log(data.output); // Your final Gemini response text
      return data.output;
    } else {
      console.error("Proxy Error:", data.error);
    }
  } catch (err) {
    console.error("Network Error:", err);
  }
}

// Usage:
await askAI("Explain how AI works in a few words");
