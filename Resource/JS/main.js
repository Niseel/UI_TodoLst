$("#alertBtn").click(function(){
    if ($("#alertShow").hasClass("show")) {
        $("#alertShow").removeClass("show");
    } else {
        $("#alertShow").addClass("show");
    }
});

$("#messBtn").click(function(){
    if ($("#messShow").hasClass("show")) {
        $("#messShow").removeClass("show");
    } else {
        $("#messShow").addClass("show");
    }
});

$("#userBtn").click(function(){
    if ($("#userShow").hasClass("show")) {
        $("#userShow").removeClass("show");
    } else {
        $("#userShow").addClass("show");
    }
});

var userSearch = document.getElementById('userSearch');
var tagify = new Tagify(userSearch, {
    enforceWhitelist: true,
    whitelist: ["Dân tổ", "Súng máy Bình Chánh", "Dân chơi hệ tàn hình", "Làm anh là dễ"], 
    blacklist: ["Cầu thủ chơi bóng"]
});