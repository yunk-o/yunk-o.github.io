$(function(){
	
	$('.sub').hide();

	$('.title').click(function(){
		$('.sub').hide();
		$(this).next().show();
	});
});