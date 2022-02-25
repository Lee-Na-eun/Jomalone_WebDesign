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
		$("#floral_sel li").eq(0).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#honey").fadeIn();
		});

		$("#floral_sel li").eq(1).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#jasmine").fadeIn();
		});

		$("#floral_sel li").eq(2).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#mimosa").fadeIn();
		});

		$("#floral_sel li").eq(3).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#orange").fadeIn();
		});

		$("#floral_sel li").eq(4).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#peony").fadeIn();
		});

		$("#floral_sel li").eq(5).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#whitemusk").fadeIn();
		});

		$("#floral_sel li").eq(6).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#tube").fadeIn();
		});

		$("#floral_sel li").eq(7).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#velvet").fadeIn();
		});

		$("#floral_sel li").eq(8).click(function(){
			$("#floral_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#violet").fadeIn();
		});
		// sel_box 클릭했을 때 fade in out

		// choice_box li 클릭했을 때
		$("#honey .choice_box li").eq(0).click(function(){
			$("#honey .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#honey .choice_box li").eq(1).click(function(){
			$("#honey .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#honey .choice_box li").eq(2).click(function(){
			$("#honey .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#honey .choice_box li").eq(3).click(function(){
			$("#honey .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});



		$("#jasmine .choice_box li").eq(0).click(function(){
			$("#jasmine .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#jasmine .choice_box li").eq(1).click(function(){
			$("#jasmine .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#jasmine .choice_box li").eq(2).click(function(){
			$("#jasmine .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#jasmine .choice_box li").eq(3).click(function(){
			$("#jasmine .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#mimosa .choice_box li").eq(0).click(function(){
			$("#mimosa .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#mimosa .choice_box li").eq(1).click(function(){
			$("#mimosa .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#mimosa .choice_box li").eq(2).click(function(){
			$("#mimosa .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#mimosa .choice_box li").eq(3).click(function(){
			$("#mimosa .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});



		$("#orange .choice_box li").eq(0).click(function(){
			$("#orange .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#orange .choice_box li").eq(1).click(function(){
			$("#orange .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#orange .choice_box li").eq(2).click(function(){
			$("#orange .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#orange .choice_box li").eq(2).click(function(){
			$("#orange .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#peony .choice_box li").eq(0).click(function(){
			$("#peony .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#peony .choice_box li").eq(1).click(function(){
			$("#peony .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#peony .choice_box li").eq(2).click(function(){
			$("#peony .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#peony .choice_box li").eq(3).click(function(){
			$("#peony .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#whitemusk .choice_box li").eq(0).click(function(){
			$("#whitemusk .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#whitemusk .choice_box li").eq(1).click(function(){
			$("#whitemusk .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#whitemusk .choice_box li").eq(2).click(function(){
			$("#whitemusk .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#whitemusk .choice_box li").eq(3).click(function(){
			$("#whitemusk .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#tube .choice_box li").eq(0).click(function(){
			$("#tube .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#tube .choice_box li").eq(1).click(function(){
			$("#tube .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#tube .choice_box li").eq(2).click(function(){
			$("#tube .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#tube .choice_box li").eq(3).click(function(){
			$("#tube .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#velvet .choice_box li").eq(0).click(function(){
			$("#velvet .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#velvet .choice_box li").eq(1).click(function(){
			$("#velvet .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#velvet .choice_box li").eq(2).click(function(){
			$("#velvet .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#velvet .choice_box li").eq(3).click(function(){
			$("#velvet .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#violet .choice_box li").eq(0).click(function(){
			$("#violet .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#violet .choice_box li").eq(1).click(function(){
			$("#violet .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#violet .choice_box li").eq(2).click(function(){
			$("#violet .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#violet .choice_box li").eq(3).click(function(){
			$("#violet .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});
		// choice_box li 클릭했을 때
});