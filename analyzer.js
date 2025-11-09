// ✅ Tự động chọn đúng URL (localhost hoặc Replit/Vercel)
const API_URL =
  window.location.hostname.includes("repl") ||
  window.location.hostname.includes("vercel") ||
  window.location.hostname.includes("asia")
    ? `${window.location.origin}/analyze`
    : "http://localhost:3000/analyze";

// Đảm bảo code chỉ chạy sau khi HTML đã tải
window.addEventListener("DOMContentLoaded", () => {
  const analyzeBtn = document.getElementById("analyzeBtn");
  const messageInput = document.getElementById("userMessage");
  const resultEl = document.getElementById("result");
  const loadingGif = document.getElementById("loadingGif");
  const dangerGif = document.getElementById("dangerGif");
  const gifContainer = document.getElementById("gifContainer");

  if (!analyzeBtn || !messageInput || !resultEl) {
    console.error("❌ Thiếu phần tử HTML cần thiết.");
    return;
  }

  analyzeBtn.addEventListener("click", async () => {
    const message = messageInput.value.trim();
    if (!message) {
      alert("⚠️ Vui lòng nhập nội dung cần phân tích!");
      return;
    }

    resultEl.style.display = "none";
    if (gifContainer) gifContainer.style.display = "block";
    if (loadingGif) loadingGif.style.display = "block";
    if (dangerGif) dangerGif.style.display = "none";
    resultEl.textContent = "⏳ Đang phân tích bằng Gemini AI...";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `
Bạn là AURA, một trí tuệ nhân tạo có nhiệm vụ phân tích mức độ an toàn của các tình huống được người dùng nhập vào. 
Hãy xác định xem tình huống đó là An toàn hay Nguy hiểm (đối với học sinh THCS). 
Trả lời đúng định dạng:
An toàn/Nguy hiểm: [số%]
Lí do: [ngắn gọn, nêu rõ hành vi nguy hiểm hoặc an toàn].
Tình huống: "${message}"
`,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Server trả về lỗi HTTP ${response.status}`);
      }

      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        data.error?.message ||
        "Không nhận được phản hồi từ AI.";

      resultEl.textContent = reply;
      resultEl.style.display = "block";

      const lower = reply.toLowerCase();
      if (lower.includes("nguy hiểm")) {
        if (dangerGif) dangerGif.style.display = "block";
      } else {
        if (gifContainer) gifContainer.style.display = "none";
      }
    } catch (err) {
      console.error(err);
      resultEl.style.display = "block";
      resultEl.textContent =
        "⚠️ Lỗi khi gọi server: " +
        (err.message.includes("Network") ? "Không thể kết nối đến server." : err.message);
      if (gifContainer) gifContainer.style.display = "none";
    } finally {
      if (loadingGif) loadingGif.style.display = "none";
    }
  });
});

const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
  themeToggle.textContent = '';
  let iconSpan = themeToggle.querySelector('span');
  if (!iconSpan) {
    iconSpan = document.createElement('span');
    themeToggle.appendChild(iconSpan);
  }

  // 🔹 Kiểm tra và áp dụng chế độ đã lưu trong localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.documentElement.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.documentElement.classList.remove('dark-mode');
  }

  function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    iconSpan.textContent = isDark ? '🌙' : '🌞';
  }

  // Gán icon ban đầu
  updateThemeIcon();

  // 🔹 Khi người dùng nhấn nút chuyển chế độ
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light'); // 🔸 Lưu trạng thái
    updateThemeIcon();
  });
}
