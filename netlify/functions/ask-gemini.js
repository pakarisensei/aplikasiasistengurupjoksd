// Mengimpor library Google Generative AI
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Handler utama untuk Netlify Function
exports.handler = async function (event, context) {
  // 1. Memeriksa apakah metode request adalah POST. Fungsi ini hanya menerima POST.
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405, // Method Not Allowed
      body: JSON.stringify({ error: "Metode request tidak diizinkan" }),
    };
  }

  try {
    // 2. Mengambil API Key dari environment variables di Netlify
    // Pastikan Anda sudah mengatur variabel ini di dashboard Netlify Anda!
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("API Key Gemini tidak ditemukan. Harap atur di environment variables Netlify.");
    }

    // 3. Mengambil 'prompt' dari body request yang dikirim dari halaman depan
    const { prompt } = JSON.parse(event.body);
    if (!prompt) {
      return {
        statusCode: 400, // Bad Request
        body: JSON.stringify({ error: "Prompt tidak boleh kosong" }),
      };
    }

    // 4. Menginisialisasi model AI Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // 5. Menghasilkan konten berdasarkan prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 6. Mengirimkan kembali hasil dalam format JSON yang diharapkan oleh script.js
    // Formatnya adalah: { "text": "..." }
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    };

  } catch (error) {
    // 7. Menangani jika terjadi error
    console.error("Error pada fungsi Gemini:", error);
    return {
      statusCode: 500, // Internal Server Error
      body: JSON.stringify({ error: error.message }),
    };
  }
};
