
$(document).ready(function(){

	function rotate(obj, deg) {
		obj.css({"-webkit-transform": "rotate(" + deg + "deg)",
	  		     "transform"        : "rotate(" + deg + "deg)"});
	}

	$(".menuItems li").hover(function(){
		var degree;
		var id = $(this).attr("id");
		switch(id) {
			case "first": 
				degree = -50;
				$(".content > div").hide(0);
				$(".aboutMe").fadeIn(0);
				break;
			case "second":
				degree = 50;
				$(".content > div").hide(0);
				$(".education").fadeIn(0);
				break;
			case "third":
				degree = -20;
				$(".content > div").hide(0);
				$(".experience").fadeIn(0);
				break;
			case "fourth":
				degree = 20;
				$(".content > div").hide(0);
				$(".contact").fadeIn(0);
				break;
			default: degree = 0;
		}
		rotate($(".rotator"), degree);
		
	}, function(){
		rotate($(".rotator"),0);
	});
});