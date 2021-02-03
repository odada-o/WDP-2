// 준비이벤트
$(function(){

    // fade-in-out (상단 큰이미지)
    let now = 0

    // .slide li 모두 안보이게...
    $('.slide li').hide()

    // .slide li 중 첫번째 보이게..
    // $('.slide li:nth-child(1)').show()
    $('.slide li').eq(now).show()

    
    // $('.slide li:nth-child(1)').hide()
    // $('.slide li:nth-child(2)').show()

    // $('.slide li:nth-child(2)').hide()
    // $('.slide li:nth-child(3)').show()

    // $('.slide li:nth-child(3)').hide()
    // $('.slide li:nth-child(1)').show()

    // function(조건문){실행문}

    // 3초마다 실행
    setInterval(function(){
        
        // 만약 슬라이드 이미지가 1,2번째 이미지라면
        // 다음 이미지를 보여줘
        // now = 0 (첫번째), 1(두번째), 2(세번째)
        if(now < 2){
            // 참일 경우 (첫번째와 두번째 슬라이드)
            $('.slide li').eq(now).fadeOut()
            $('.slide li').eq(now+1).fadeIn()

            now = now +1
            // now++
        }else{
            // 거짓일 경우 (세번째 슬라이드)
            $('.slide li').eq(now).fadeOut()
            $('.slide li').eq(0).fadeIn()

            now = 0
        }
    }, 3000)

    // 배너 슬라이드
    // 변수
    let now2 = 1

    // 2초 마다 실행
    setInterval(function(){
        // 참일 경우
        // 만약 첫번째 이미지일 경우 : 두번째 이미지로 이동
        // 만약 두번째 이미지일 경우 : 세번째 이미지로 이동
        if(now2 < 3){
            $('.slide-bnr ul').animate({
                left : ((-1) * now2 * 100) + '%',
                top : 0
            })
            now2 = now2 + 1
        }else{
            // 그밖에 세번째 이미지일 경우 : 첫번째 이미지로 이동
            $('.slide-bnr ul').animate({
                left : '0'
            })
            now2 = 1;
        }
    }, 2000)

    // 공지사항 모달창 띄우기
    $('.sec-bbs li:first-child').click(function(){
        $('#modal').show()
    })
    $('#modal input').click(function(){
        $('#modal').hide()
    })

})