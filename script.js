var degree = 0;

$(document).ready(function(){

	function rotate(obj, deg) {
		obj.css({"-webkit-transform": "rotate(" + deg + "deg)",
	  		     "transform"        : "rotate(" + deg + "deg)"});
	}

	var active = "";
	$(".menuItems li").hover(function(){
		var id = $(this).attr("id");
		/* hide current box if not the same */
		if(active != $(this).attr("id")) {
			$(".content > div").css("display","none");
		}

		/* change color after hover */
		$(".menuItems li").css("background-color","#9A523D");
		$(this).css("background-color","#593F4A");
		$(".content").css("padding","20px");

		switch(id) {
			case "first": 
				degree = -50;
				$(".aboutMe").show(600,'linear');
				active = "first";
				break;
			case "second":
				degree = 50;
				$(".education").show(600,'linear');
				active = "second";
				break;
			case "third":
				degree = -20;
				$(".experience").show(600,'linear');
				$(".experience li").delay(300).fadeIn(300);
				active = "third";
				break;
			case "fourth":
				degree = 20;
				$(".contact").show(600,'linear');
				active = "fourth";
				break;
			default: degree = 0;
		}
		rotate($(".rotator"), degree);
		
	}, function(){
		//rotate($(".rotator"),0);
	});

	$(".rotButt").click(function(){
		rotate($(".rotator"), degree+=360);

	});
});