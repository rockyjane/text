$(function(){
	
	function AAA(){
		//$(this).off('click')
		console.log(1)	
		
	}
	function BBB(){
		
		console.log(2)	
		
	}
	//document.querySelector('img').onclick = AAA
	//document.querySelector('img').onclick = BBB
	
	//document.querySelector('img').addEventListener('click',AAA)
	//document.querySelector('img').addEventListener('click',BBB)
	//document.querySelector('img').removeEventListener('click',BBB)
	
	//$('img').click(AAA)
	$('img').on('click',AAA)
	//$('img').click(BBB)
	$('img').one('click',BBB)
	
	
	
	//$('img').off('click',AAA)
	
	
})