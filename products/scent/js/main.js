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


    // #sel_btn_1 클릭했을 때
    $("#sel_btn_1").click(function(){
        $(this).css("display","none");
        $("#sel_btn_2").fadeIn(1000);
    });

    $("#close_btn").click(function(){
        $("#sel_btn_2").css("display","none")
        $("#sel_btn_1").fadeIn(1000);
    });
    // #sel_btn_1 클릭했을 때
});