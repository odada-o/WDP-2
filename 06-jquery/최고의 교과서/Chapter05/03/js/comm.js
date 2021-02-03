$(function(){
    // .page-header 각각 기능 넣어줘
    $('.page-header').each(function(){

        let 헤더 = $(this),
            $윈도우 = $(window),
            헤더위치 = 헤더.offset().top

        // 윈도우를 스크롤 할 때
        $윈도우.scroll(function(){

            // 윈도우의 스크롤 값
            console.log('윈도우의 스크롤 값 : ' + $윈도우.scrollTop())
            // .page-header의 위치 값 (240)
            // $('.page-header').offset().top
            console.log('.page-header의 위치 값' + 헤더위치 )


            // 만약 윈도우의 스크롤 값 > 240 경우
            // .page-header에게 sticky 클래스 추가
            // 아닐 경우
            // .page-header에게 sticky 클래스 삭제
            if( $윈도우.scrollTop() > 헤더위치 ){
                헤더.addClass('sticky')
            }else{
                헤더.removeClass('sticky')
            }
        })
        // 윈도우의 스크롤 이벤트를 발생시키는 메서드
        // 헤더의 초기 위치를 조정하기 위해 사용
        $(window).trigger('scroll')

    })
})