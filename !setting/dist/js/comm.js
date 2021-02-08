$(function(){
  // header sticky
  let $window = $(window)
  $window.scroll(function(){
    if($(this).scrollTop() > 50){
      $('header').addClass('bg-light navbar-light').removeClass('navbar-dark')
    }else{
      $('header').removeClass('bg-light navbar-light').addClass('navbar-dark')
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
  var swiper = new Swiper('.slide-top', {
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
    },
  });

  // slide-banner
  // var swiper = new Swiper('.slide-banner1, .slide-banner2', {
  var swiper = new Swiper('.slide-banner1', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.slide-banner2', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next-out',
      prevEl: '.swiper-button-prev-out',
    },
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

        if(winscroll + 600 > pos){
          $(this).addClass('ani-top')
        }
      })
    })

})