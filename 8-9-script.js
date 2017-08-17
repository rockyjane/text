$(function(){
	
	$('.COURSE > div').eq(0).slideDown()
	
	$('.COURSE > h3').click(function(){
		
		if( $(this).next('div').is(':visible') ) return false
		
		$('.COURSE > div').filter(':visible').stop().slideUp()		
		$(this).next('div').stop().slideDown()//.parent().siblings().children('div').slideUp()
		
		return false
		
		
	})
	
	
	
})