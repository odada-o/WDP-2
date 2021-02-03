$(function(){
    // #typo 에 마우스오버시 
    // 1. background-color를 purple로 변경
    // 2. h1의 color를 purple로 변경

    $('#typo')
    .mouseenter(function(){
        $(this).css({'background-color' : 'purple'})
        $('h1').css({'color' : 'purple'})
    })
    // 마우스가 떠나면 원래 상태로 변경
    .mouseleave(function(){
        $(this).css({'background-color' : ''})
        $('h1').css({'color' : ''})
    })

})