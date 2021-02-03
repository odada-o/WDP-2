$(function(){

  $('.page-header').each(function(){

      let $헤더 = $(this),
          $헤더복제 = $('.page-header-clone'), 
          $window = $(window)
          
      $('body').append('<div class="page-header-clone"></div>')
      $헤더.contents().clone().appendTo('.page-header-clone')

      //윈도우를 스크롤했을때
      $window.scroll(function(){
          //윈도우의 스크롤값 (ES6)
          //$(window).scrollTop()
          console.log(`스크롤 값 : ${$window.scrollTop()}`)
          //헤더의 윗쪽 위치값
          //$('.page-header').offset().top
          console.log(`헤더의 위치 값 : ${$('.page-header').offset().top}`)

          //만약 if (스크롤 값 > 헤더의 위치 값) 
          //.page-header-clone 에게 visible 클래스 추가
          //그렇지않다면 else
          //.page-header-clone 에게 visible 클래스 삭제 
          if($window.scrollTop() > $('.page-header').offset().top){
              $헤더복제.addClass('visible')
          }else{
            $헤더복제.removeClass('visible')
          }

      });

  });
});