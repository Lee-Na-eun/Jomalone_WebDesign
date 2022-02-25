$(function(){
    // 메뉴 클릭했을때
    var menu = $("#menu")
    $("#btn").click(function(){
        menu.css({"margin-left":"-300px"});
    });
    $("#close").click(function(){
        menu.css({"margin-left":"-600px"});
    });

    var menu_2 = $("#menu_2 li")
    var menu_1 = $(".one")
    menu_2.eq(1).click(function(){
        menu_1.eq(0).css("margin-left","300px");

        $(".back").click(function(){
            menu_1.eq(0).css("margin-left","-300px");
        });
    });

    menu_2.eq(2).click(function(){
        menu_1.eq(1).css("margin-left","300px");

        $(".back").click(function(){
            menu_1.eq(1).css("margin-left","-300px");
        });
    });

    menu_2.eq(4).click(function(){
        menu_1.eq(2).css("margin-left","300px");

        $(".back").click(function(){
            menu_1.eq(2).css("margin-left","-300px");
        });
    });
    // 메뉴 클릭했을때
    
    // 스크롤 부드럽게
    $("html").easeScroll();
    // 스크롤 부드럽게

    // 스크롤 할 때 섹션 애니메이션
    AOS.init();
    // 스크롤 할 때 섹션 애니메이션

    // 스크롤 했을 때 up, down 생성
    $(window).scroll(function(){
        if($(this).scrollTop() > 450){
            $("#up").fadeIn();
            $("#down").fadeIn();
        }else{
            $("#up").fadeOut();
            $("#down").fadeOut();
        }
    });
    // 스크롤 했을 때 up, down 생성

    // 버튼 클릭했을 때 위치
    $("#up").click(function(){
        $("html").animate({scrollTop:0},800);
    });

    $("#down").click(function(){
        $("html").animate({scrollTop:6035},800);
    });
    // 버튼 클릭했을 때 위치

    // 스크롤 했을 때 sec_1 fadein,out
    /*$(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $("#sec_1 .sub_img").fadeIn();
        }else{
            $("#sec_1 .sub_img").fadeOut();
        }
    });*/

    $(window).scroll(function(){
        if($(this).scrollTop() > 800){
            $("#scarlet").fadeIn();
        }else{
            $("#scarlet").fadeOut();
        }
    });
    // 스크롤 했을 때 sec_1 fadein,out

    
    // 스크롤 했을 때 sec_2 fadein,out
    $(window).scroll(function(){
        if($(this).scrollTop() > 1400){
            $("#sec_2 .text_box_1").fadeIn();
        }else{
            $("#sec_2 .text_box_1").fadeOut();
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 1900){
            $("#sec_2 .sub_img").fadeIn();
        }else{
            $("#sec_2 .sub_img").fadeOut();
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 2500){
            $("#room").fadeIn();
        }else{
            $("#room").fadeOut();
        }
    });
    // 스크롤 했을 때 sec_2 fadein,out

    // 스크롤 했을 때 sec_3 fadein,out
    $(window).scroll(function(){
        if($(this).scrollTop() > 3150){
            $("#sec_3 .text_box_1").fadeIn();
        }else{
            $("#sec_3 .text_box_1").fadeOut();
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 3650){
            $("#sec_3 .sub_img").fadeIn();
        }else{
            $("#sec_3 .sub_img").fadeOut();
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 4250){
            $("#daydream").fadeIn();
        }else{
            $("#daydream").fadeOut();
        }
    });
    // 스크롤 했을 때 sec_3 fadein,out
    

    // scarlet 두 종류 클릭
    var A = 0;
    var B = 0;

    $("#scarlet_100 .price_1").click(function(){
        A++;
        B=A%2;

        if(B==1){
            $("#scarlet_100 .price_2").fadeIn();
            $("#scarlet_100 .un_btn").css("background-image","url(a/pd-up.png)");
        }else{
            $("#scarlet_100 .price_2").fadeOut();
            $("#scarlet_100 .un_btn").css("background-image","url(a/pd-under.png)");
        }
    });

    $("#scarlet_100 .price_2").click(function(){
        $("#scarlet_50").css("display","block")
        $("#scarlet_100").css("display","none")
    });


    var a=0;
    var b=0;

    $("#scarlet_50 .price_1").click(function(){
        a++;
        b=a%2;

        if(b==1){
            $("#scarlet_50 .price_2").fadeIn();
            $("#scarlet_50 .un_btn").css("background-image","url(a/pd-up.png)")
        }else{
            $("#scarlet_50 .price_2").fadeOut();
            $("#scarlet_50 .un_btn").css("background-image","url(a/pd-under.png)")
        }
    });

    $("#scarlet_50 .price_2").click(function(){
        $("#scarlet_100").css("display","block")
        $("#scarlet_50").css("display","none")
    });
    // scarlet 두 종류 클릭


    // daydream_1 두 종류 클릭
    var C = 0;
    var D = 0;

    $("#red_100 .price_1").click(function(){
        C++;
        D=C%2;

        if(D==1){
            $("#red_100 .price_2").fadeIn();
            $("#red_100 .un_btn").css("background-image","url(a/pd-up.png)");
        }else{
            $("#red_100 .price_2").fadeOut();
            $("#red_100 .un_btn").css("background-image","url(a/pd-under.png)");
        }
    });

    $("#red_100 .price_2").click(function(){
        $("#red_30").css("display","block")
        $("#red_100").css("display","none")
    });

    var c=0;
    var d=0;

    $("#red_30 .price_1").click(function(){
        c++;
        d=c%2;

        if(d==1){
            $("#red_30 .price_2").fadeIn();
            $("#red_30 .un_btn").css("background-image","url(a/pd-up.png)")
        }else{
            $("#red_30 .price_2").fadeOut();
            $("#red_30 .un_btn").css("background-image","url(a/pd-under.png)")
        }
    });

    $("#red_30 .price_2").click(function(){
        $("#red_100").css("display","block")
        $("#red_30").css("display","none")
    });
    // daydream_1 두 종류 클릭


    // daydream_2 두 종류 클릭
    var E = 0;
    var F = 0;

    $("#yellow_100 .price_1").click(function(){
        E++;
        F=E%2;

        if(F==1){
            $("#yellow_100 .price_2").fadeIn();
            $("#yellow_100 .un_btn").css("background-image","url(a/pd-up.png)");
        }else{
            $("#yellow_100 .price_2").fadeOut();
            $("#yellow_100 .un_btn").css("background-image","url(a/pd-under.png)");
        }
    });

    $("#yellow_100 .price_2").click(function(){
        $("#yellow_30").css("display","block")
        $("#yellow_100").css("display","none")
    });

    var e=0;
    var f=0;

    $("#yellow_30 .price_1").click(function(){
        e++;
        f=e%2;

        if(f==1){
            $("#yellow_30 .price_2").fadeIn();
            $("#yellow_30 .un_btn").css("background-image","url(a/pd-up.png)")
        }else{
            $("#yellow_30 .price_2").fadeOut();
            $("#yellow_30 .un_btn").css("background-image","url(a/pd-under.png)")
        }
    });

    $("#yellow_30 .price_2").click(function(){
        $("#yellow_100").css("display","block")
        $("#yellow_30").css("display","none")
    });
    // daydream_2 두 종류 클릭


    // daydream_3 두 종류 클릭
    var G = 0;
    var H = 0;

    $("#white_100 .price_1").click(function(){
        G++;
        H=G%2;

        if(H==1){
            $("#white_100 .price_2").fadeIn();
            $("#white_100 .un_btn").css("background-image","url(a/pd-up.png)");
        }else{
            $("#white_100 .price_2").fadeOut();
            $("#white_100 .un_btn").css("background-image","url(a/pd-under.png)");
        }
    });

    $("#white_100 .price_2").click(function(){
        $("#white_30").css("display","block")
        $("#white_100").css("display","none")
    });

    var g=0;
    var h=0;

    $("#white_30 .price_1").click(function(){
        g++;
        h=g%2;

        if(h==1){
            $("#white_30 .price_2").fadeIn();
            $("#white_30 .un_btn").css("background-image","url(a/pd-up.png)")
        }else{
            $("#white_30 .price_2").fadeOut();
            $("#white_30 .un_btn").css("background-image","url(a/pd-under.png)")
        }
    });

    $("#white_30 .price_2").click(function(){
        $("#white_100").css("display","block")
        $("#white_30").css("display","none")
    });
    // daydream_3 두 종류 클릭


    // daydream_4 두 종류 클릭
    var I = 0;
    var J = 0;

    $("#green_100 .price_1").click(function(){
        I++;
        J=I%2;

        if(J==1){
            $("#green_100 .price_2").fadeIn();
            $("#green_100 .un_btn").css("background-image","url(a/pd-up.png)");
        }else{
            $("#green_100 .price_2").fadeOut();
            $("#green_100 .un_btn").css("background-image","url(a/pd-under.png)");
        }
    });

    $("#green_100 .price_2").click(function(){
        $("#green_30").css("display","block")
        $("#green_100").css("display","none")
    });

    var i=0;
    var j=0;

    $("#green_30 .price_1").click(function(){
        i++;
        j=i%2;

        if(j==1){
            $("#green_30 .price_2").fadeIn();
            $("#green_30 .un_btn").css("background-image","url(a/pd-up.png)")
        }else{
            $("#green_30 .price_2").fadeOut();
            $("#green_30 .un_btn").css("background-image","url(a/pd-under.png)")
        }
    });

    $("#green_30 .price_2").click(function(){
        $("#green_100").css("display","block")
        $("#green_30").css("display","none")
    });
    // daydream_4 두 종류 클릭
});