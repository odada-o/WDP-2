$(function(){

$('.page-header').each(function(){

    let $헤더 = $(this),
        // $헤더복제 = $('.page-header-clone'), 복제 되기 전...
        $window = $(window)


    // body태그 내 뒷쪽에
    // <div class="page-header-clone"></div> 태그 만들고
    $('body').append('<div class="page-header-clone"></div>')

    // .page-header의 안쪽 컨텐츠만 복제
    // .page-header-clone 태그 안에다 넣어줘
    $헤더.contents().clone().appendTo('.page-header-clone')

    // 윈도우를 스크롤 했을 때
    $window.scroll(function(){

        let $헤더복제 = $('.page-header-clone'),
            $헤더위치 = $헤더.offset().top,
            $스크롤값 = $window.scrollTop(),
            $헤더높이 = $헤더.outerHeight()

        // 윈도우의 스크롤 값(ES6)
        // $(window).scrollTop()
        console.log(`스크롤 값 : ${$스크롤값}`)
        // 헤더의 윗쪽 위치값
        // $('.page-header').offset().top
        console.log('헤더의 위치값 : ' + $헤더위치 ) /* 옛날 ver */
        console.log(`헤더의 위치값 : ${$헤더위치}`) /* ES6 */
        // 헤더의 높이값
        // $('.page-header').outerHeight()
        console.log(`헤더의 높이값 : ${$헤더높이}`)

        // 만약 (스크롤 값 > 헤더의 위치 값)
        // .page-header-clone 에게 visible 클래스 추가
        // 그렇지 않다면
        // .page-header-clone 에게 visible 클래스 삭제
        if( $스크롤값 > ($헤더위치 + $헤더높이) ){
            $헤더복제.addClass('visible')
        }else{
            $헤더복제.removeClass('visible')
        }






    })

})


})