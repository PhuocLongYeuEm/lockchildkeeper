// ✅ SERVER ỔN ĐỊNH CHO LOCALHOST, VERCEL & DOMAIN RIÊNG
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");
const dotenvResult = require("dotenv").config({ quiet: true });

// ✅ Đảm bảo fetch hoạt động trên mọi Node version
let fetchFn;
try {
  fetchFn = fetch; // Node 18+ có sẵn fetch
} catch {
  fetchFn = (...args) => import("node-fetch").then(({ default: f }) => f(...args));
}
const fetch = fetchFn;

const app = express();

// 🛡️ Cấu hình bảo mật
app.use(helmet());

// 🌐 Cấu hình CORS: chỉ cho phép domain hợp lệ (ALLOWED_ORIGIN)
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ⚙️ Cho phép đọc JSON và truy cập file tĩnh (HTML, JS, CSS)
app.use(express.json());
app.use(express.static(__dirname));

// 🚫 Giới hạn request để tránh spam
app.use(
  rateLimit({
    windowMs: 60 * 1000, // 1 phút
    max: 60, // tối đa 60 request/phút
  })
);

// 🔑 Lấy API key từ biến môi trường
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  console.error("❌ Thiếu API_KEY trong file .env hoặc Environment Variables của Vercel.");
}

// 🌍 URL của Gemini API
const MODEL_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
  API_KEY;

// ✅ Endpoint chính: /analyze
app.post("/analyze", async (req, res) => {
  try {
    console.log("📩 Nhận request từ client:", req.body);

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
    res.status(500).json({ error: "Không thể kết nối tới Gemini API hoặc mạng đang gặp sự cố." });
  }
});

// ✅ Route mặc định: khi người dùng truy cập "/" thì gửi về index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ✅ Route cho các trang con (cho phép /DangNhap, /DangKy, /game ...)
app.get("/:page", (req, res) => {
  const filePath = path.join(__dirname, `${req.params.page}.html`);
  res.sendFile(filePath, (err) => {
    if (err) res.status(404).send("Trang không tồn tại.");
  });
});

// 🚀 Khởi động server (chỉ dùng khi chạy local)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
  });
}

module.exports = app;
