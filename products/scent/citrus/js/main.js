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

  $("#resel_btn_1").click(function(){
     $(this).css("display","none");
     $("#resel_btn_2").fadeIn(500);
  });

  $("#close_btn").click(function(){
     $("#resel_btn_2").css("display","none")
     $("#resel_btn_1").fadeIn(500);
  });
});