$(function(){
  // header sticky
  $(window).scroll(function(){
    if($(this).scrollTop() > 50){
      $('header').addClass('bg-light navbar-light').removeClass('navbar-dark')
    }else{
      $('header').removeClass('bg-light navbar-light').addClass('navbar-dark')
    }
  })
  $(window).trigger('scroll')


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



})