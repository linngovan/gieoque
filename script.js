const hexagrams = [
    { name: "1. Càn (乾)", meaning: "Trời - Khởi đầu, sáng tạo, vững vàng và kiên định." },
    { name: "2. Khôn (坤)", meaning: "Đất - Mềm mại, tiếp nhận, nuôi dưỡng, vững chắc." },
    { name: "3. Truân (屯)", meaning: "Khó khăn ban đầu - Khởi đầu trắc trở nhưng chứa tiềm năng phát triển." },
    { name: "4. Mông (蒙)", meaning: "Khai trí - Giai đoạn học hỏi, cần hướng dẫn và hiểu biết." },
    { name: "5. Nhu (需)", meaning: "Chờ đợi - Kiên nhẫn, đợi cơ hội chín muồi." },
    { name: "6. Tụng (訟)", meaning: "Tranh chấp - Mâu thuẫn, phải xử lý bằng lý trí." },
    { name: "7. Sư (師)", meaning: "Quân đội - Tổ chức, kỷ luật, lãnh đạo." },
    { name: "8. Tỷ (比)", meaning: "Gắn bó - Đoàn kết, tương trợ." },
    { name: "9. Tiểu súc (小畜)", meaning: "Tích lũy nhỏ - Kiềm chế, tích trữ sức mạnh." },
    { name: "10. Lý (履)", meaning: "Bước đi - Hành xử cẩn trọng, giữ lễ nghĩa." },
    // ... thêm các quẻ còn lại tại đây
    { name: "63. Ký Tế (既濟)", meaning: "Đã xong - Thành công đã đạt, cần giữ vững và duy trì." },
    { name: "64. Vị Tế (未濟)", meaning: "Chưa xong - Cuối cùng chưa hoàn tất, cần kiên trì và tỉnh táo." }
];

function generateHexagram() {
    const random = Math.floor(Math.random() * hexagrams.length);
    const hexagram = hexagrams[random];
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="text-xl font-bold text-indigo-700 mb-2">${hexagram.name}</div>
        <div class="text-gray-800">${hexagram.meaning}</div>
    `;
}
