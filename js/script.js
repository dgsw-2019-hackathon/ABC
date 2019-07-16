
$(document).ready(function(){
	$(".app-g").hide();
	
	$(".sub").hide();
	// $("ul > li:first-child a").next().show();
	$(".navi>li a").click(function(){
		$(this).next().slideToggle(300);
		// $(this).next().slideDown(300);
		$(".navi>li a").not(this).next().slideUp(300);
		return false;
	});
//	$(".navi>li a").eq(0).trigger("click");
	
	$(".search-btn").click(function(){
		var age = $("#age").val();
		var gender = $("#gender").val();
		var genre = $("#genre").val();
		
		hideAll();
		
//		console.log("::"+age+gender+genre);
		
		var v = valueCodeResult(age, gender, genre);
		$('.'+v).show();
	});
});

function valueCodeResult(a, s, g){
	var result = "";
	
	if (a == "A10"){
		result=result+"A1";
	}
	else if (a == "A20"){
		result=result+"A2";
	}
	else if (a == "A30"){
		result=result+"A3";
	}
	else if (a == "A40"){
		result=result+"A4";
	}
	
	if (s == "M"){
		result=result+"M";
	}
	else if (s == "F"){
		result=result+"F";
	}
	
	if (g == "GAME"){
		result=result+"GM";
	}
	else if (g == "MUSIC"){
		result=result+"MS";
	}
	else if (g == "SOCIAL"){
		result=result+"SC";
	}
	else if (g == "FINANCIAL"){
		result=result+"FN";
	}
	
//	console.log(result);
	
	return result;
}

function hideAll(){
	$(".app-g").hide();
}

function showAlltoA(){
	
}
function showAlltoS(){
	
}
function showAlltoG(){
	
}


function openNav(){
	$(".left-list").css({"width":"100%", "display":"block"});
}

function closeNav(){
	$(".left-list").css({"width":"0px", "display":"none"});
}


