$(function(){
	
	var WHO
	
	$('#HEADER a').on('mouseenter',function(){
		
		//console.log('position:'+$(this).position().top)
		//console.log('offset:'+$(this).offset().top)
		
		WHO = $(this)
		
		
		var POS = $(this).position().left
		//$('#BB').stop().animate({left:POS},AFTER)
		
		$('#BB').stop().animate({left:POS},{
			complete:AFTER			
		})
		
		$('#HEADER a').css({color:''})
		
		
	})
	
	
	function AFTER(){
		//console.log(this)
		WHO.css({color:'#eee'})
	}
	
	
})

/*

$('XXX').hover(fun1,fun2)
$('XXX').on('mouseenter',fun1)
$('XXX').on('mouseleave',fun2)

$('XXX').hover(fun)
$('XXX').on('mouseenter mouseleave',fun1)

*/