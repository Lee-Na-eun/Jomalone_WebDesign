$(function(){
		// 메뉴 스크롤 했을 때
		var header_fix = $("#sec_all").offset().top
		$(window).scroll(function(){
			if($(this).scrollTop() > header_fix-100){
				$("#header").css({"background-color":"black","position":"fixed"});
			}else{
				$("#header").css({"background-color":"rgba(0, 0, 0, 0)","position":"fixed"});	
			}
		});
		// 메뉴 스크롤 했을 때
		
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
			if($(this).scrollTop() > 800){
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
			$("html").animate({scrollTop:4500},800);
		});
		// 버튼 클릭했을 때 위치

		// sec_1 next 클릭했을 때
		$(".next").eq(0).click(function(){
			$(".sec_1_wrap").eq(1).fadeIn();
			$(".sec_1_wrap").eq(0).fadeOut();
		});

		$(".next").eq(1).click(function(){
			$(".sec_1_wrap").eq(2).fadeIn();
			$(".sec_1_wrap").eq(1).fadeOut();
		});

		$(".next").eq(2).click(function(){
			$(".sec_1_wrap").eq(3).fadeIn();
			$(".sec_1_wrap").eq(2).fadeOut();
		});

		$(".next").eq(3).click(function(){
			$(".sec_1_wrap").eq(0).fadeIn();
			$(".sec_1_wrap").eq(3).fadeOut();
		});
		// sec_1 next 클릭했을 때

		//스크롤 했을 때 sec_1 변화
		$(window).scroll(function(){
			if($(this).scrollTop() > 500){
				$("#sec_1").fadeIn();
			}else{$("#sec_1").fadeOut();}
		});

		$(window).scroll(function(){
			if($(this).scrollTop() > 600){
				$(".next").fadeIn();
			}else{$(".next").fadeOut();}
		});
		//스크롤 했을 때 sec_1 변화
		
	});