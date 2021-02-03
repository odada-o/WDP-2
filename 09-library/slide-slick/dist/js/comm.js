$(function(){
    // slide-top
    $('.slick-top').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        // arrows : false,
        fade : true,
    });

    // 1) .slide-play 버튼 안보게
    $('.slide-play').hide()
    // 2) .slide-pause 클릭했을 때 일시정지하고 
    //       [pause] 버튼 없애고 [play] 버튼 보이게
    // 슬라이드 일시정지
    $('.slide-pause').click(function(){
        $('.slick-top').slick('slickPause')
        $(this).hide()
        $('.slide-play').show()
    })
    
    // 3) .slide-play  클릭했을 때 다시 플레이하고
    //       [play] 버튼 없애고 [pause] 버튼 보이게
    // 슬라이드 시작
    $('.slide-play').click(function(){
        $('.slick-top').slick('slickPlay')
        $(this).hide()
        $('.slide-pause').show()
    })
    




    // slide-banner
    $('.slick-banner').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '60px',
        arrows : false,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            }
          ]
      });



})