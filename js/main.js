$(function(){
  //ハンバーガーメニュー
  $(".nav-btn").on("click", function(){
    $(this).toggleClass("close");
    $(".nav__list").toggleClass("is-active");
    $("body").toggleClass("noscroll");
  });
  $(".nav__item").on("click", function(){
    $(".nav-btn").toggleClass("close");
    $(".nav__list").removeClass("is-active");
    $("body").removeClass("noscroll");
  });
});