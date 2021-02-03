$(function(){

    $('#work').each(function(){

        let $탭리스트 = $(this).find('.tabs-nav'),
            $탭패널 = $(this).find('.tabs-panel'),
            $탭링크 = $탭리스트.find('a');

        // $this .tabs-nav a 클릭했을 때
        // $('#work .tabs-nav a').click()
        $탭리스트.on('click focus', 'a', function(event){
            // 링크 기본 동작 취소
            event.preventDefault()

            // 만약 이미 선택된 탭이라면(active 클래스를 가지고 있다면)
            // 아무것도 하지 않고 처리를 중지
            // $(this) = #work .tabs-nav a
            if( $(this).hasClass('active') ){
                return
            }

            // 모든 탭의 active 클래스 삭제
            // 클릭한 탭에 active 클래스 추가
            $탭리스트.find('a').removeClass('active')
            $(this).addClass('active')

            // 모든 패널을 안보이게 처리
            $탭패널.hide()
            // 클릭된 탭에 id값과 같은 패널을 표시
            $( $(this).attr('href') ).show()
            
        })

        // 첫번째 탭이 클릭된 상태로
        $탭링크.eq(0).trigger('click')

    })
})