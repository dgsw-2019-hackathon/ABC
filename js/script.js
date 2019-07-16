
$(document).ready(function(){
	$(".sub").hide();
	// $("ul > li:first-child a").next().show();
	$(".navi>li a").click(function(){
		$(this).next().slideToggle(300);
		// $(this).next().slideDown(300);
		$(".navi>li a").not(this).next().slideUp(300);
		return false;
	});
	$(".navi>li a").eq(0).trigger("click");
});


//
//function openNav(){
//	$(".left-list").css({"width":"20%", "display":"block"});
//}
//
//function closeNav(){
//	$(".left-list").css({"width":"0px", "display":"none"});
//}
//
