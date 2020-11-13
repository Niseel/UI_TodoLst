var textarea = document.getElementById('tag');
var tagify = new Tagify(textarea, {
    enforceWhitelist: true,
    whitelist: ["Dân tổ", "Súng máy Bìsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssnh Chánh", "Dân chơisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss hệ tàn hình", "Làm anh là dễ"], 
    blacklist: ["Cầu thủ chơi bóng"]
});