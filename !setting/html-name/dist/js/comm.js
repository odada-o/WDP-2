$(function(){

  //gnb
  var $navDepth1 = $('#gnb nav'),
        $header = $('#header')

  //초기화
  $navDepth1.removeClass('active');

  $navDepth1.on('focusin mouseenter',function(){
    $(this).addClass('active')
    $header.addClass('sticky')
  });
  $navDepth1.on('focusout mouseleave',function(){
    $(this).removeClass('active')
    $header.removeClass('sticky')
  });

  // header sticky
  let $window = $(window)
  $window.scroll(function(){
    if($(this).scrollTop() > 50){
      $header.addClass('sticky')
    }else{
      $header.removeClass('sticky')
    }
  }).trigger('scroll')

  // 메뉴 클릭시 해당 해쉬태그로 애니메이션 되면서 이동
  $('.navbar-nav a').click(function(event){
    // a링크 기능 없애기
    event.preventDefault()

    // 만약 링크에 해쉬태그가 비어있지 않다면...
    if(this.hash != ""){

      let hash = this.hash

      $('html, body').animate({
        scrollTop : $(hash).offset().top - 77 // gnb의 높이값을 빼주삼
      }, 800)
    }
  })

  // slide-top
  let introSwiper = new Swiper('.slide-top', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  // swiper pause
  let $slideTop = $('.slide-top')

  $slideTop.find('.swiper-button-play').hide()

  $slideTop.find('.swiper-button-pause').click(function(){
    introSwiper.autoplay.stop()
    $slideTop.find('.swiper-button-play').show()
    $slideTop.find('.swiper-button-pause').hide()
  })
  
  $slideTop.find('.swiper-button-play').click(function(){
    introSwiper.autoplay.start();
    $slideTop.find('.swiper-button-play').hide()
    $slideTop.find('.swiper-button-pause').show()
  })

  // slide-banner
  // var swiper = new Swiper('.slide-banner1, .slide-banner2', {
  var swiper = new Swiper('.slide-banner1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });
  var swiper = new Swiper('.slide-banner2', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next-out',
      prevEl: '.swiper-button-prev-out',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });

  // scrollUp
  $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '페이지 위로 이동', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // 스크롤시 오브젝트 애니메이션
    $(window).scroll(function(){
      $('.ani-slide').each(function(){

        let pos = $(this).offset().top,
            winscroll = $(window).scrollTop()

        if(winscroll + 700 > pos){
          $(this).addClass('ani-top')
        }
      })
    })

    // includeHTML
    includeHTML()

})

!function($) {
	'use strict';

	$(function(){
		initUI.setup();

		// 퍼블리싱 전용 (주의!!! 개발 완료시 모두 삭제)/////////////////////////////
		if(location.port == '8888' || location.hostname.indexOf('uxdev.etribe.co.kr') != -1){
			header.init(); // 개발언어로 변경시 이 부분 삭제 해야 합니다. (개발언어로 인클루드 필요.)
			footer.init(); // 개발언어로 변경시 이 부분 삭제 해야 합니다. (개발언어로 인클루드 필요.)


			// mac os 일 경우 html 태그에 mac_os 클래스 붙임
			if (navigator.userAgent.indexOf('Mac OS X') != -1) {
				$("html").addClass("mac_os");
			}
		}
		/////////////////////////////////////////////////////////////////////////////
	});
}