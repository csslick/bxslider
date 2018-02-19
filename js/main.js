
$(function(){

	var img_length = 8; // 이미지 개수
	var html = '';

	for(var i=1;i <= img_length;i++){
			html += '<li>',
			html += '<img src="images/' + i + '.jpg">'
			html += '<div class="caption">판.매.1위 봄 신상 엔틱 드롭귀걸이 은침 롱 링 큐빅</div>',
			html += '<div class="price">3,900</div></li>';
	}

	$('.bxslider').html(html);

	$('.bxslider').bxSlider({
		auto: true,	// 자동 재생
		captions: false,	// 캡션 사용 유무(true/false)
		responsive: true,
		minSlides: 4,	// 슬라이드 개수
		maxSlides: 4, // 슬라이드 개수
		slideWidth: 1600,
		pause: 2000	// 정지시간

	});
});	
