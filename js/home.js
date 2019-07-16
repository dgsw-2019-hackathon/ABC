$(document).ready(function(){
	$("#search-genre").hide();
	$(".search-check").click(function(){
		if ($(this).is(":checked") == true){
			$("#search-genre").stop().slideDown();
		}
		else{
			$("#search-genre").stop().slideUp();
		}
	});
});
