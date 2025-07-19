// Mengimpor pustaka Google Generative AI
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Mengakses kunci API Anda dari variabel lingkungan Netlify
// Ini adalah cara yang aman untuk menyimpan kunci API Anda
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Fungsi handler utama yang akan dijalankan oleh Netlify
exports.handler = async function (event, context) {
  // Hanya izinkan permintaan dengan metode POST untuk keamanan
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Mengurai (parse) data yang dikirim dari frontend
    const { prompt } = JSON.parse(event.body);

    // Validasi: pastikan prompt tidak kosong
    if (!prompt) {
      return { statusCode: 400, body: JSON.stringify({ error: "Prompt is required" }) };
    }

    // Memilih model Gemini yang akan digunakan
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Menghasilkan konten berdasarkan prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Mengirim kembali hasil teks ke frontend
    return {
      statusCode: 200,
      body: JSON.stringify({ text: text }),
    };
  } catch (error) {
    // Menangani jika terjadi kesalahan saat memanggil API
    console.error("Error calling Gemini API:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to call Gemini API" }),
    };
  }
};
