setTimeout(function(){$('.box_wrap').isotope()},100)

$('.box_wrap').isotope({
  // options
  itemSelector: '.box',
  layoutMode: 'masonry'
});

$(".btns>li").click(function(){
  $(this).addClass("active")
  $(this).siblings().removeClass("active")
  const i=$(this).attr("data-filter")
  // data-filter값을 호출하여 i에 넣어주겠다/ attr(attribute)-> 속성값 매서드 호출
  // $(this).attr("data-filter", "속성값") -> 속성 메서드 호출+호출값 변경 ex)이미지 변경 : "src","경로"
  $('.box_wrap').isotope({filter:i})
})

$(".fancybox").fancybox();