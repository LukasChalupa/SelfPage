
$(document).ready(function(){

	function rotate(obj, deg) {
		obj.css({"-webkit-transform": "rotate(" + deg + "deg)",
	  		     "transform"        : "rotate(" + deg + "deg)"});
	}

	var active = "";
	$(".menuItems li").hover(function(){
		var degree;
		var id = $(this).attr("id");
		if(active != $(this).attr("id")) {
			$(".content > div").hide();
		}
		switch(id) {
			case "first": 
				degree = -50;
				$(".aboutMe").show(500);
				active = "first";
				break;
			case "second":
				degree = 50;
				$(".education").show(500);
				active = "second";
				break;
			case "third":
				degree = -20;
				$(".experience").show(500);
				active = "third";
				break;
			case "fourth":
				degree = 20;
				$(".contact").show(500);
				active = "fourth";
				break;
			default: degree = 0;
		}
		rotate($(".rotator"), degree);
		
	}, function(){
		//rotate($(".rotator"),0);
	});
});