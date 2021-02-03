$(function(){
    // 실행문
    $('.tab h2').click(function(){
        // on 클래스 삭제
        $('.tab section').removeClass('on')
        // 방금 내가 클릭한 아이에게 on 클래스 추가
        $(this).parent().addClass('on')
    })

    // modal창 띄우기
    $('.sec-bnr img').click(function(){
        $('#modal').show()
    })
    // modal창 닫기
    $('#modal input').click(function(){
        $('#modal').hide()
    })


})