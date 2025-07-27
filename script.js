// Dữ liệu 64 quẻ Kinh Dịch
const hexagrams = [
    {
        number: 1,
        name: "Càn - Thiên",
        symbol: "☰",
        lines: [1,1,1,1,1,1],
        meaning: "Quẻ của sức mạnh sáng tạo, khởi đầu mạnh mẽ. Thời điểm thuận lợi để bắt đầu những dự án lớn.",
        advice: "Hãy mạnh dạn tiến lên, nhưng đừng quên khiêm tốn. Sức mạnh cần được sử dụng một cách khôn ngoan."
    },
    {
        number: 2,
        name: "Khôn - Địa",
        symbol: "☷",
        lines: [0,0,0,0,0,0],
        meaning: "Quẻ của sự nhận và nuôi dưỡng. Thời gian để kiên nhẫn, chấp nhận và hỗ trợ người khác.",
        advice: "Hãy kiên nhẫn và khiêm tốn. Sức mạnh của bạn nằm ở khả năng hỗ trợ và nuôi dưỡng."
    },
    {
        number: 3,
        name: "Truân - Thủy Lôi",
        symbol: "☵",
        lines: [1,0,0,0,1,0],
        meaning: "Khó khăn ban đầu. Mọi việc khó khăn khi bắt đầu, cần kiên trì và tìm kiếm sự giúp đỡ.",
        advice: "Đừng nản lòng trước khó khăn. Hãy tập trung vào nền tảng vững chắc và tìm kiếm sự hỗ trợ."
    },
    // ... (giữ nguyên các quẻ khác)
    {
        number: 4,
        name: "Mông - Sơn Thủy",
        symbol: "☶",
        lines: [0,1,0,0,0,1],
        meaning: "Sự khờ dại trẻ thơ. Cần học hỏi, tìm kiếm sự hướng dẫn từ người có kinh nghiệm.",
        advice: "Hãy khiêm tốn học hỏi. Đừng ngại hỏi han và lắng nghe lời khuyên từ người khôn ngoan."
    },
    {
        number: 5,
        name: "Nhu - Thủy Thiên",
        symbol: "☵",
        lines: [1,1,1,0,1,0],
        meaning: "Chờ đợi. Thời điểm cần kiên nhẫn chờ đợi thời cơ thuận lợi.",
        advice: "Kiên nhẫn là chìa khóa. Sử dụng thời gian này để chuẩn bị và tích lũy sức mạnh."
    },
    {
        number: 6,
        name: "Tụng - Thiên Thủy",
        symbol: "☰",
        lines: [0,1,0,1,1,1],
        meaning: "Xung đột, tranh cãi. Cần tránh xung đột và tìm cách hòa giải.",
        advice: "Tránh tranh chấp không cần thiết. Hãy tìm cách thỏa hiệp và giải quyết hòa bình."
    },
    {
        number: 7,
        name: "Sư - Địa Thủy",
        symbol: "☷",
        lines: [0,1,0,0,0,0],
        meaning: "Quân đội, tổ chức. Cần có kỷ luật và lãnh đạo khôn ngoan.",
        advice: "Tổ chức và kỷ luật là chìa khóa thành công. Hãy lãnh đạo bằng gương mẫu."
    },
    {
        number: 8,
        name: "Tỷ - Thủy Địa",
        symbol: "☵",
        lines: [0,0,0,0,1,0],
        meaning: "Đoàn kết, hợp tác. Sức mạnh đến từ việc hợp tác với người khác.",
        advice: "Hãy xây dựng mối quan hệ tốt và hợp tác chân thành với mọi người xung quanh."
    },
    {
        number: 11,
        name: "Thái - Địa Thiên",
        symbol: "☷",
        lines: [1,1,1,0,0,0],
        meaning: "Thịnh vượng, hòa bình. Thời kỳ thuận lợi và phát triển.",
        advice: "Tận dụng thời cơ tốt này để phát triển. Nhưng hãy chuẩn bị cho những thay đổi tương lai."
    },
    {
        number: 12,
        name: "Phủ - Thiên Địa",
        symbol: "☰",
        lines: [0,0,0,1,1,1],
        meaning: "Tắc nghẽn, khó khăn. Thời kỳ thử thách và cần kiên nhẫn.",
        advice: "Giữ vững tinh thần trong khó khăn. Thời gian này sẽ qua, hãy chuẩn bị cho cơ hội mới."
    },
    {
        number: 15,
        name: "Khiêm - Địa Sơn",
        symbol: "☷",
        lines: [0,0,1,0,0,0],
        meaning: "Khiêm tốn. Sức mạnh của việc khiêm nhường và không kiêu ngạo.",
        advice: "Khiêm tốn sẽ mang lại thành công lâu dài. Hãy học hỏi từ người khác và không kiêu ngạo."
    },
    {
        number: 16,
        name: "Dự - Lôi Địa",
        symbol: "☳",
        lines: [0,0,0,1,0,0],
        meaning: "Hào hứng, nhiệt tình. Thời điểm tốt để khởi động dự án với tinh thần cao.",
        advice: "Tận dụng sự nhiệt tình này để thúc đẩy kế hoạch. Nhưng hãy duy trì sự cân bằng."
    },
    {
        number: 20,
        name: "Quan - Phong Địa",
        symbol: "☴",
        lines: [0,0,0,1,1,0],
        meaning: "Quan sát, suy ngẫm. Thời gian để học hỏi và hiểu biết sâu sắc hơn.",
        advice: "Hãy dành thời gian quan sát và suy ngẫm. Hiểu biết sâu sắc sẽ giúp bạn đưa ra quyết định đúng."
    },
    {
        number: 23,
        name: "Bác - Sơn Địa",
        symbol: "☶",
        lines: [0,0,0,0,0,1],
        meaning: "Phân rã, suy thoái. Thời kỳ cần từ bỏ cái cũ để tạo chỗ cho cái mới.",
        advice: "Đôi khi cần phải buông bỏ để tạo không gian cho điều mới. Hãy kiên nhẫn chờ đợi."
    },
    {
        number: 24,
        name: "Phục - Địa Lôi",
        symbol: "☷",
        lines: [1,0,0,0,0,0],
        meaning: "Trở lại, phục hồi. Khởi đầu mới sau thời gian khó khăn.",
        advice: "Cơ hội mới đang xuất hiện. Hãy nắm bắt và bắt đầu lại với tinh thần mới."
    },
    {
        number: 25,
        name: "Vô Vọng - Thiên Lôi",
        symbol: "☰",
        lines: [1,0,0,1,1,1],
        meaning: "Tự nhiên, chân thành. Hành động từ trái tim, không có toan tính.",
        advice: "Hãy hành động một cách tự nhiên và chân thành. Đừng có quá nhiều toan tính phức tạp."
    },
    {
        number: 42,
        name: "Ích - Phong Lôi",
        symbol: "☴",
        lines: [1,0,0,0,1,1],
        meaning: "Lợi ích, tăng trưởng. Thời gian thuận lợi cho phát triển và mở rộng.",
        advice: "Đây là thời điểm tốt để đầu tư và phát triển. Hãy chia sẻ lợi ích với người khác."
    },
    {
        number: 47,
        name: "Khốn - Trạch Thủy",
        symbol: "☱",
        lines: [0,1,0,0,1,1],
        meaning: "Khó khăn, bế tắc. Cần tìm cách vượt qua thử thách bằng trí tuệ.",
        advice: "Trong khó khăn, hãy giữ vững tinh thần và tìm kiếm sự sáng tạo để giải quyết vấn đề."
    },
    {
        number: 50,
        name: "Đỉnh - Hỏa Phong",
        symbol: "☲",
        lines: [1,1,0,1,0,1],
        meaning: "Đỉnh cao, thành tựu. Đạt được mục tiêu sau thời gian nỗ lực.",
        advice: "Hãy tận hưởng thành tựu nhưng không được kiêu ngạo. Chuẩn bị cho bước tiếp theo."
    },
    {
        number: 57,
        name: "Tốn - Phong",
        symbol: "☴",
        lines: [0,1,1,0,1,1],
        meaning: "Nhẹ nhàng nhưng kiên trì. Sức mạnh của sự nhẹ nhàng và liên tục.",
        advice: "Hãy kiên trì nhẹ nhàng. Những thay đổi nhỏ liên tục sẽ mang lại kết quả lớn."
    }
];

// Các phần tử DOM
const castBtn = document.getElementById('castBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');
const loadingOverlay = document.getElementById('loadingOverlay');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const loadingMessage = document.getElementById('loadingMessage');

// Các thông điệp loading
const loadingMessages = [
    "Chuẩn bị tinh thần...",
    "Kết nối với vũ trụ...",
    "Tập trung năng lượng...",
    "Giải mã quẻ tượng...",
    "Tìm kiếm câu trả lời...",
    "Hoàn tất gieo quẻ..."
];

let progressInterval;
let messageInterval;

// Hàm hiển thị loading với progress bar
function showLoading() {
    loadingOverlay.style.display = 'flex';
    castBtn.disabled = true;
    
    let progress = 0;
    let messageIndex = 0;
    
    // Cập nhật progress bar
    progressInterval = setInterval(() => {
        progress += 2; // Tăng 2% mỗi 60ms = 100% trong 3 giây
        
        if (progress <= 100) {
            progressFill.style.width = progress + '%';
            progressText.textContent = progress + '%';
        }
        
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 60);
    
    // Cập nhật thông điệp
    messageInterval = setInterval(() => {
        if (messageIndex < loadingMessages.length) {
            loadingMessage.textContent = loadingMessages[messageIndex];
            messageIndex++;
        }
    }, 500);
}

// Hàm ẩn loading
function hideLoading() {
    loadingOverlay.style.display = 'none';
    clearInterval(progressInterval);
    clearInterval(messageInterval);
    
    // Reset progress
    progressFill.style.width = '0%';
    progressText.textContent = '0%';
    loadingMessage.textContent = loadingMessages[0];
}

// Hàm hiển thị kết quả
function showResult(hexagram) {
    // Hiển thị thông tin quẻ
    document.getElementById('hexagramSymbol').textContent = hexagram.symbol;
    document.getElementById('hexagramName').textContent = hexagram.name;
    document.getElementById('hexagramNumber').textContent = `Quẻ số ${hexagram.number}`;
    document.getElementById('hexagramMeaning').textContent = hexagram.meaning;
    
    // Tạo HTML cho lời khuyên
    document.getElementById('hexagramAdvice').innerHTML = `
        <h3>💡 Lời khuyên:</h3>
        <p>${hexagram.advice}</p>
    `;

    // Tạo hình ảnh các vạch quẻ
    const hexagramLines = document.getElementById('hexagramLines');
    hexagramLines.innerHTML = '';
    hexagram.lines.forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.className = `line ${line === 1 ? 'yang' : 'yin'}`;
        hexagramLines.appendChild(lineDiv);
    });

    // Hiển thị kết quả với hiệu ứng
    result.style.display = 'block';
    result.style.opacity = '0';
    result.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        result.style.transition = 'all 0.5s ease';
        result.style.opacity = '1';
        result.style.transform = 'translateY(0)';
    }, 100);

    // Hiển thị nút reset
    resetBtn.style.display = 'inline-block';
    castBtn.style.display = 'none';
}

// Hàm gieo quẻ
function castHexagram() {
    showLoading();
    
    // Sau 3 giây thì hiển thị kết quả
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * hexagrams.length);
        const selectedHexagram = hexagrams[randomIndex];
        
        hideLoading();
        showResult(selectedHexagram);
    }, 3000);
}

// Hàm reset
function resetDivination() {
    result.style.display = 'none';
    resetBtn.style.display = 'none';
    castBtn.style.display = 'flex';
    castBtn.disabled = false;
    
    // Reset progress nếu đang chạy
    clearInterval(progressInterval);
    clearInterval(messageInterval);
    hideLoading();
}

// Gắn sự kiện
castBtn.addEventListener('click', castHexagram);
resetBtn.addEventListener('click', resetDivination);

// Tạo particles effect
function createParticle() {
    const particle =
