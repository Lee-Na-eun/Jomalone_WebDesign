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


        var a = 0;
        var b = 0; 
        $("#sel_btn").click(function(){
            a++;
            b = a%2;

            $("#click_after").slideToggle()

            $("#sel_btn").not(this).next().slideUp()
        });

        // 스크롤 했을 때 up, down 생성
		$(window).scroll(function(){
			if($(this).scrollTop() > 300){
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
			$("html").animate({scrollTop:1800},800);
		});
		// 버튼 클릭했을 때 위치
});