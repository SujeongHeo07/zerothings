
$(function() {
    // best_seller tab
    $(".best_seller .left_categories button").on("click", function() {
        
        const no = $(".best_seller .left_categories button").index($(this));
        
        $(".best_seller .product_list").hide();
        $("#main_seller_con_" + no).show();
        
        $(".best_seller .left_categories button").removeClass("active");
        $("#main_seller_tab_" + no).addClass("active");
    
    });
    
    // group_seller tab
    $(".group_seller .left_categories button").on("click", function() {
        
        const no = $(".group_seller .left_categories button").index($(this));
        
        $(".group_seller .product_list").hide();
        $("#main_group_con_" + no).show();
        
        $(".group_seller .left_categories button").removeClass("active");
        $("#main_group_tab_" + no).addClass("active");
        
    });
    
    // about
    $(window).scroll(function() {
        if ($(this).scrollTop() >= Math.ceil($('.main_about').offset().top - 240)) {
            $('.introduction').addClass("active");
        } else {
            $('.introduction').removeClass("active");
        }
    });
    
    // slide
	var slideCount = $('#slider .slide_box a').length;
	var slideWidth = $('#slider .slide_box a').width();
	var slideHeight = $('#slider .slide_box a').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider .slide_box').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider .slide_box a').css({ width: slideWidth });
	
    $('#slider .slide_box a:last-child').prependTo('#slider .slide_box');

    function moveLeft() {
        $('#slider .slide_box').animate({
            left: + slideWidth
        }, 300, function () {
            $('#slider a:last-child').prependTo('#slider .slide_box');
            $('#slider .slide_box').css('left', '');
        });
    };
    
    function moveRight() {
        $('#slider .slide_box').animate({
            left: - slideWidth
        }, 300, function () {
            $('#slider .slide_box a:first-child').appendTo('#slider .slide_box');
            $('#slider .slide_box').css('left', '');
        });
    };
    
    setInterval(function () {
        moveRight();
    }, 8000);
    
    $('.control_prev').click(function () {
        moveLeft();
    });

    $('.control_next').click(function () {
        moveRight();
    });
    
});




