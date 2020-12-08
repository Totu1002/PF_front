//トップに戻るボタンアクション
$(function() {
    $('#back a').on('click',function(event){
      $('body, html').animate({
        scrollTop:0
      }, 800);
      event.preventDefault();
    });
});

//ハンバーガーメニュー
$(function(){
    $("#toggle").click(function(){
      $("#menu").slideToggle();
      return false;
    });
    $(window).resize(function(){
      var win = $(window).width();
      var p = 480;
      if(win > p){
        $("#menu").show();
      }
    });
});