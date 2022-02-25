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
		$("#woody_sel li").eq(0).click(function(){
			$("#woody_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#onef").fadeIn();
		});

		$("#woody_sel li").eq(1).click(function(){
			$("#woody_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#juniper").fadeIn();
		});

		$("#woody_sel li").eq(2).click(function(){
			$("#woody_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#bronze").fadeIn();
		});

		$("#woody_sel li").eq(3).click(function(){
			$("#woody_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#dark").fadeIn();
		});

		$("#woody_sel li").eq(4).click(function(){
			$("#woody_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#myrrh").fadeIn();
		});

		$("#woody_sel li").eq(5).click(function(){
			$("#woody_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#bergamot").fadeIn();
		});

		$("#woody_sel li").eq(6).click(function(){
			$("#woody_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#golden").fadeIn();
		});

		$("#woody_sel li").eq(7).click(function(){
			$("#woody_sel li").removeClass("on")
			$(this).addClass("on")

			$("#choice_box_wrap > div").fadeOut();
			$("#wood").fadeIn();
		});
		// sel_box 클릭했을 때 fade in out

		// choice_box li 클릭했을 때
		$("#onef .choice_box li").eq(0).click(function(){
			$("#onef .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#onef .choice_box li").eq(1).click(function(){
			$("#onef .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#onef .choice_box li").eq(2).click(function(){
			$("#onef .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#onef .choice_box li").eq(3).click(function(){
			$("#onef .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});



		$("#juniper .choice_box li").eq(0).click(function(){
			$("#juniper .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#juniper .choice_box li").eq(1).click(function(){
			$("#juniper .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#juniper .choice_box li").eq(2).click(function(){
			$("#juniper .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#juniper .choice_box li").eq(3).click(function(){
			$("#juniper .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#bronze .choice_box li").eq(0).click(function(){
			$("#bronze .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#bronze .choice_box li").eq(1).click(function(){
			$("#bronze .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#bronze .choice_box li").eq(2).click(function(){
			$("#bronze .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#bronze .choice_box li").eq(3).click(function(){
			$("#bronze .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});



		$("#dark .choice_box li").eq(0).click(function(){
			$("#dark .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#dark .choice_box li").eq(1).click(function(){
			$("#dark .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#dark .choice_box li").eq(2).click(function(){
			$("#dark .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#dark .choice_box li").eq(3).click(function(){
			$("#dark .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#myrrh .choice_box li").eq(0).click(function(){
			$("#myrrh .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#myrrh .choice_box li").eq(1).click(function(){
			$("#myrrh .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#myrrh .choice_box li").eq(2).click(function(){
			$("#myrrh .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#myrrh .choice_box li").eq(3).click(function(){
			$("#myrrh .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#bergamot .choice_box li").eq(0).click(function(){
			$("#bergamot .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#bergamot .choice_box li").eq(1).click(function(){
			$("#bergamot .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#bergamot .choice_box li").eq(2).click(function(){
			$("#bergamot .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#bergamot .choice_box li").eq(3).click(function(){
			$("#bergamot .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#golden .choice_box li").eq(0).click(function(){
			$("#golden .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#golden .choice_box li").eq(1).click(function(){
			$("#golden .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#golden .choice_box li").eq(2).click(function(){
			$("#golden .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#golden .choice_box li").eq(3).click(function(){
			$("#golden .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});




		$("#wood .choice_box li").eq(0).click(function(){
			$("#wood .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#wood .choice_box li").eq(1).click(function(){
			$("#wood .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#wood .choice_box li").eq(2).click(function(){
			$("#wood .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});

		$("#wood .choice_box li").eq(3).click(function(){
			$("#wood .choice_box li").css({"opacity":"0.4","border":"0"});
			$(this).css({"border":"1px solid white","opacity":"1"});
		});
		// choice_box li 클릭했을 때
});