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

    // 스크롤 했을 때 up, down 생성
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$(".up").fadeIn();
			$(".down").fadeIn();
		}else{
			$(".up").fadeOut();
			$(".down").fadeOut();
		}
	});
	// 스크롤 했을 때 up, down 생성


    // 버튼 클릭했을 때 위치
	$(".up").click(function(){
		$("html").animate({scrollTop:0},800);
	});

    $(".down").click(function(){
		$("html").animate({scrollTop:8000},800);
	});
	// 버튼 클릭했을 때 위치

    
    // 스크롤 부드럽게
    $("html").easeScroll();
    // 스크롤 부드럽게

    // 스크롤 할 때 섹션 애니메이션
    AOS.init();
    // 스크롤 할 때 섹션 애니메이션


    // .select 클릭했을 때 li toggle
    var a = 0;
    var b = 0; 
    $(".select").click(function(){
        a++;
        b = a%2;
        if(b==1){
            $(".sel_btn").css("transform","rotate(180deg)");
        }else{
            $(".sel_btn").css("transform","rotate(0deg)");
        }

        $(".filter_a li").slideToggle()

        $(".select").not(this).next().slideUp()
    });
    // .select 클릭했을 때 li toggle


    // #select li 클릭했을 때 버튼
    $(".filter_a li").eq(0).click(function(){
        $(".chk_2").removeClass("on_2")
        $(".chk_2").eq(0).addClass("on_2") 
    });

    $(".filter_a li").eq(1).click(function(){
        $(".chk_2").removeClass("on_2")
        $(".chk_2").eq(1).addClass("on_2") 
    });

    $(".filter_a li").eq(2).click(function(){
        $(".chk_2").removeClass("on_2")
        $(".chk_2").eq(2).addClass("on_2") 
    });

    $(".filter_a li").eq(3).click(function(){
        $(".chk_2").removeClass("on_2")
        $(".chk_2").eq(3).addClass("on_2") 
    });

    $(".filter_a li").eq(4).click(function(){
        $(".chk_2").removeClass("on_2")
        $(".chk_2").eq(4).addClass("on_2") 
    });

    $(".filter_a li").eq(5).click(function(){
        $(".chk_2").removeClass("on_2")
        $(".chk_2").eq(5).addClass("on_2") 
    });

    $(".filter_a li").eq(6).click(function(){
        $(".chk_2").removeClass("on_2")
        $(".chk_2").eq(6).addClass("on_2") 
    });

    $(".filter_a li").eq(7).click(function(){
        $(".chk_2").removeClass("on_2")
        $(".chk_2").eq(7).addClass("on_2") 
    });
    // #select li 클릭했을 때 버튼

    
    // 필터 선택했을 때 나오는 값
    $(".list").click(function(){
        const value = $(this).attr('data-filter');
        
        if(value == 'all'){
            $('.itemBox').css("display","block");
        }else{
            $('.itemBox').not('.'+value).css("display","none");
            $('.itemBox').filter('.'+value).css("display","block");
        }
    });
    // 필터 선택했을 때 나오는 값


    // 선택된 박스 클릭했을 때 modal
    $(".c_lime_box").click(function(){
        $("#c_lime_wrap").fadeIn();
    });

    $(".modal_close").click(function(){
        $("#c_lime_wrap").fadeOut();
    });


    $(".f_engli_box").click(function(){
        $("#f_engli_wrap").fadeIn();
    });

    $(".modal_close").click(function(){
        $("#f_engli_wrap").fadeOut();
    });
    // 선택된 박스 클릭했을 때 modal


    // graph_ex 스크롤할 때 fadeIn
    $(window).scroll(function(){
		if($(this).scrollTop() > 10){
			$("#graph_ex").fadeIn();
            $("#graph_box").fadeIn();
		}else{
			$("#graph_ex").fadeOut();
            $("#graph_box").fadeOut();
		}
	});
    // graph_ex 스크롤할 때 fadeIn
});