$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 500) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

if (window.matchMedia('(max-width: 767px)').matches) {
   //スマホ処理
} else if (window.matchMedia('(min-width:768px)').matches) {
   $(function() {
 
      // 一旦hide()で隠してフェードインさせる
      $('.shopname').hide().fadeIn(1000);
     
    });

}


 
