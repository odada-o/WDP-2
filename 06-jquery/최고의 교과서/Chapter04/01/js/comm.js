$(function(){

    // 1~4번째 버튼에
    $('#buttons1 button:nth-child(-n+4)')
    // 마우스 오버시
    .mouseenter(function(){
        // 그 아이를 animate로 bg-c : purple , color : #fff
        $(this).stop().animate({
            'background-color' : 'purple',
            'color' : '#fff'
        }, 5000)
    })
    // 마우스 떠날 시
    .mouseleave(function(){
        // 그 아이에게 애니메이션으로 원래대로 복구해줘
        $(this).stop().animate({
            'background-color' : '#fff',
            'color' : '#ebc000'
        }, 5000)
    })

    // 5~8번째 버튼에 
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
    //마우스 오버시
    .mouseenter(function(){
        // 그 아이에게 애니메이션
        // (border-width : 10px, color : purple) 
        // speed 0.5초
        $(this).stop().animate({
            'border-width' : '10px',
            'color' : 'purple'
        }, 500, 'easeInCirc')

    })
    // 마우스 아웃시
    // 원래대로 복구 (speed : 0.5 , timing : easeInCirc)
    .mouseleave(function(){
        $(this).stop().animate({
            'border-width' : '0',
            'color' : '#ebc000'
        }, 500, 'easeInCirc')
    })

    // 9~12번째 버튼에
    $('#buttons1 button:nth-child(n+9)')
    // 마우스 오버시
    .mouseenter(function(){
        // [그 아이 > .bg] 에게 애니메이션 (width: 100%)
        $(this).find('.bg').stop().animate({
            'width' : '100%'
        }, 500)
    })

    // 마우스 아웃시
    .mouseleave(function(){
        // [그 아이 > .bg] 에게 애니메이션 (width: 0)
        $(this).find('.bg').stop().animate({
            'width' : 0
        }, 500)
    })


})