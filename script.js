
$(document).ready(function(){

	function rotate(obj, deg) {
		obj.css({"-ms-transform"    : "rotate(" + deg + "deg)",
	  		     "-webkit-transform": "rotate(" + deg + "deg)",
	  		     "transform"        : "rotate(" + deg + "deg)"});
	}

	$(".menuItems li").hover(function(){
		var degree;
		var id = $(this).attr("id");
		switch(id) {
			case "aboutMe": degree = -50; break;
			case "education": degree = 50; break;
			case "portfolio": degree = -20; break;
			case "contact": degree = 20; break;
			default: degree = 0;
		}
		rotate($(".rotator"), degree);
		
	}, function(){
		rotate($(".rotator"),0);
		
	});
});