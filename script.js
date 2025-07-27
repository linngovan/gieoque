const API_KEY = "AIzaSyBGQHZMHE7c6EniQJ8wIOZRug5iYRjfrMo";
const castButton = document.getElementById("castButton");
const resultDiv = document.getElementById("result");
const loading = document.getElementById("loading");
const limitMsg = document.getElementById("limitMsg");

const prompt = `Hãy cho tôi một quẻ Kinh Dịch ngẫu nhiên từ hệ thống 64 quẻ. Vui lòng trình bày rõ ràng theo các mục sau, với nội dung ngắn gọn, dễ hiểu cho mỗi phần:\n\nTên quẻ: (Bao gồm Hán tự nếu có)\n\nHình quẻ: (Mô tả Thượng quái, Hạ quái và ý nghĩa của chúng)\n\nÝ nghĩa chung của quẻ: (Tóm tắt thông điệp chính)\n\nÝ nghĩa các hào: (Tóm tắt ý nghĩa từng hào)\n\nLời khuyên ứng dụng trong đời sống: (Lời khuyên thiết thực, dễ áp dụng)`;

function hasCastToday() {
  const lastCast = localStorage.getItem("lastCastDate");
  const today = new Date().toISOString().split("T")[0];
  return lastCast === today;
}

function setCastToday() {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem("lastCastDate", today);
}

async function gieoQue() {
  if (hasCastToday()) {
    limitMsg.classList.remove("hidden");
    return;
  }

  loading.classList.remove("hidden");
  resultDiv.innerText = "";
  limitMsg.classList.add("hidden");

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await res.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Không nhận được kết quả.";
    resultDiv.innerText = output;
    setCastToday();
  } catch (error) {
    resultDiv.innerText = "Đã xảy ra lỗi khi gọi API.";
  } finally {
    loading.classList.add("hidden");
  }
}

castButton.addEventListener("click", gieoQue);