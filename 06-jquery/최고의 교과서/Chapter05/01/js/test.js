$(function(){

    $('.slideshow').each(function(){
        let $슬라이드이미지 =  $(this).find('img'),
             $슬라이드갯수 = $슬라이드이미지.length,
             현재이미지 = 0;

             $슬라이드이미지.eq(현재이미지).fadeIn();


             setInterval(다음슬라이드, 3000);
    
            function 다음슬라이드(){
                let 다음이미지 = 현재이미지+1

                $슬라이드이미지.eq(현재이미지).fadeOut();
                $슬라이드이미지.eq(다음이미지).fadeIn();
            }
    });
    

})