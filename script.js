
$(document).ready(function(){

	function rotate(obj, deg) {
		obj.css({"-webkit-transform": "rotate(" + deg + "deg)",
	  		     "transform"        : "rotate(" + deg + "deg)"});
	}

	$(".menuItems li").hover(function(){
		var degree;
		var id = $(this).attr("id");
		$(".content > div").hide();
		switch(id) {
			case "first": 
				degree = -50;
				$(".aboutMe").show(500);
				break;
			case "second":
				degree = 50;
				$(".education").show(500);
				break;
			case "third":
				degree = -20;
				$(".experience").show(500);
				break;
			case "fourth":
				degree = 20;
				$(".contact").show(500);
				break;
			default: degree = 0;
		}
		rotate($(".rotator"), degree);
		
	}, function(){
		rotate($(".rotator"),0);
	});
});