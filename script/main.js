$(document).ready(function(){

  //포트폴리오 탭콘텐츠
  $('.con01').show();

  let tab_menu = $('.p_con > ul > li > a');
  tab_menu.click(function(){
    $('.p_con > ul > li > a').removeClass('p_act');
    $(this).addClass('p_act');
    $('.p_con > ul > li > div').hide();
    $(this).next().show();
    return false;
  });
});