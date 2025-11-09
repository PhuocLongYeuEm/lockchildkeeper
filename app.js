// ✅ SERVER ỔN ĐỊNH CHO LOCALHOST & REPLIT
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const dotenvResult = require("dotenv").config({ quiet: true });

// ✅ Đảm bảo fetch hoạt động trên mọi Node version
let fetchFn;
try {
  // Node 18+ có sẵn fetch
  fetchFn = fetch;
} catch {
  // Node 16 trở xuống — dùng dynamic import
  fetchFn = (...args) => import("node-fetch").then(({ default: f }) => f(...args));
}
const fetch = fetchFn;

const app = express();

// 🛡️ Cấu hình bảo mật
app.use(helmet());

// 🌐 Cho phép tất cả nguồn truy cập (Replit / Localhost / Online)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ⚙️ Cho phép đọc JSON và truy cập file tĩnh (HTML, JS, CSS)
app.use(express.json());
app.use(express.static("."));

// 🚫 Giới hạn request để tránh spam
app.use(
  rateLimit({
    windowMs: 60 * 1000, // 1 phút
    max: 60, // tối đa 60 request/phút
  })
);

// 🔑 Lấy API key từ .env
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  console.error("❌ Thiếu API_KEY trong file .env — Gemini AI sẽ không hoạt động.");
}

// 🌍 URL của Gemini API (bạn có thể thay model khác nếu cần)
const MODEL_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
  API_KEY;

// ✅ Endpoint chính: /analyze
app.post("/analyze", async (req, res) => {
  try {
    console.log("📩 Nhận request từ client:", req.body);

    // Gửi đến Gemini API
    const response = await fetch(MODEL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    if (!text) {
      console.warn("⚠️ Phản hồi từ Gemini trống.");
      return res.status(500).json({ error: "Phản hồi trống từ Gemini API." });
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("❌ Lỗi parse JSON:", err);
      return res.status(500).json({ error: "Phản hồi không hợp lệ từ Gemini.", raw: text });
    }

    res.json(data);
  } catch (err) {
    console.error("❌ Lỗi proxy:", err);
    res
      .status(500)
      .json({ error: "Không thể kết nối tới Gemini API hoặc mạng đang gặp sự cố." });
  }
});

// 🚀 Khởi động server (localhost hoặc Replit)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
  });
}

module.exports = app;
