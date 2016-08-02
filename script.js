
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
				$(".aboutMe").fadeIn(1500);
				break;
			case "second":
				degree = 50;
				$(".education").fadeIn(1500);
				break;
			case "third":
				degree = -20;
				$(".experience").fadeIn(1500);
				break;
			case "fourth":
				degree = 20;
				$(".contact").fadeIn(1500);
				break;
			default: degree = 0;
		}
		rotate($(".rotator"), degree);
		
	}, function(){
		$(".content > div").fadeOut(0);
		rotate($(".rotator"),0);
	});
});