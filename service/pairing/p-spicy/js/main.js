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


		// sel_box 클릭했을 때 fade in out
		$("#spicy_sel li").eq(0).click(function(){
			$("#spicy_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#lavender").fadeIn();
		});

		$("#spicy_sel li").eq(1).click(function(){
			$("#spicy_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#hazelnut").fadeIn();
		});
		// sel_box 클릭했을 때 fade in out

		// choice_box li 클릭했을 때
		$("#lavender .choice_box li").eq(0).click(function(){
			$("#lavender .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#lavender .choice_box li").eq(1).click(function(){
			$("#lavender .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#lavender .choice_box li").eq(2).click(function(){
			$("#lavender .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#lavender .choice_box li").eq(3).click(function(){
			$("#lavender .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});



		$("#hazelnut .choice_box li").eq(0).click(function(){
			$("#hazelnut .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#hazelnut .choice_box li").eq(1).click(function(){
			$("#hazelnut .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#hazelnut .choice_box li").eq(2).click(function(){
			$("#hazelnut .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#hazelnut .choice_box li").eq(3).click(function(){
			$("#hazelnut .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});
		// choice_box li 클릭했을 때
});