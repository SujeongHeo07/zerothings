$(document).ready(function() {
    
    // header menu
    $(".menu .depth1 li").mouseover(function() { // hover
        $(this).find(".depth2").stop().show();
    }).mouseout(function() { // not hover
        $(this).find(".depth2").stop().hide();
    });
    
    
});

// mobile open
function menuOpen() {
    $("body").css("overflow", "hidden");
    $(".mobile_menu_nav").show().addClass("on");
}

// mobile close
function menuClose() {
    $("body").css("overflow", "auto");
    $(".mobile_menu_nav").hide().removeClass("on");
}

// pc 검색창
function searchToggle() { 
    $("#searchBox").toggle();
    $(".search_text").focus();
    
    if ($("#searchBox").css("display") == "none") {
        $(".search_text").focus();
    }
}

// 스크롤시 상단이동 버튼 show
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $("#upBtn").show();
    } else {
        $("#upBtn").hide();
    }
});

// 상단이동
function upMove() {
    $('html, body').animate({scrollTop : 0}, 800);
}

// 팝업 열기
function popupShow(type) {
    $("#mask").show().load("popup.html #popupBox", function() {
        if (type === "product") { // 제품 상세
            $("#popupBox").find("#popContent").text("본 페이지는 [SHOP], [느린도서관] 메뉴 상세 페이지입니다. 레이아웃이 동일하여 한가지 제품만 나오도록 제작되었습니다.");
        } else {
            alert("popup error!");
        }
        
        $("body").css("overflow", "hidden");
    });
}

// 팝업 닫기
function closePop() {
    $("#mask").hide();
    $("body").css("overflow", "visible");
}

