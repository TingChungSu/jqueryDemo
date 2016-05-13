$(document).ready(function($) {
	//Hide/Show http://www.w3schools.com/jquery/jquery_hide_show.asp
    $("button.hide").click(function(){
        $("div.hideshow").hide(1000);
	});
    $("button.show").click(function(){
        $("div.hideshow").show(1000);
	});
    $("button.toggle").click(function(){
        $("div.toggle").toggle(1000);
	});
	
	//fade http://www.w3schools.com/jquery/jquery_fade.asp
    $("button.fadeIn").click(function(){
        $("div.fade").fadeIn(1000);
	});
    $("button.fadeOut").click(function(){
        $("div.fade").fadeOut(1000);
	});
    $("button.fadeToggle").click(function(){
        $("div.fadeToggle").fadeToggle(1000);
	});
	
	//slide http://www.w3schools.com/jquery/jquery_slide.asp
    $("button.slideUp").click(function(){
        $("div.slide").slideUp(1000);
	});
    $("button.slideDown").click(function(){
        $("div.slide").slideDown(1000);
	});
    $("button.slideToggle").click(function(){
        $("div.slideToggle").slideToggle(1000);
	});
	
	//fadeTo
    $("button.fadeToHalf").click(function(){
        $("div.fadeTo").fadeTo("slow", 0.5);
	});
    $("button.fadeTo1").click(function(){
        $("div.fadeTo").fadeTo("slow", 1);
	});
	
	//animation http://www.w3schools.com/jquery/jquery_animate.asp
    $("button.left100").click(function(){
		$("div.left").animate({
			left: '+=100px',
		});
	});
    $("button.left-100").click(function(){
		$("div.left").animate({
			left: '-=100px',
		});
	});
    $("button.big50").click(function(){
		$("div.left").animate({
			height: '+=50px',
			width: '+=50px'
		});
	});
    $("button.small50").click(function(){
		$("div.left").animate({
			height: '-=50px',
			width: '-=50px'
		});
	});
    $("button.text1").click(function(){
		$("div.left").animate({
			fontSize: '+=1px'
		});
	}); 
    $("button.text-1").click(function(){
		$("div.left").animate({
			fontSize: '-=1px'
		});
	}); 
    $("button.fly").click(function(){
		var div = $("div.left");
		div.animate({left: '+=300px'}, "60");
		div.animate({left: '-=50px'}, "10");
		div.animate({left: '+=20px'}, "4");
		div.animate({left: '-=10px'}, "2");
		div.animate({height: '+=300px', opacity: '0.4'}, "200");
		div.animate({width: '+=300px', opacity: '0.8', fontSize:'45px'}, "200");
		div.animate({height: '-=300px', opacity: '0.4'}, "200");
		div.animate({width: '-=300px', opacity: '1', fontSize:'18px'}, "200");
		div.animate({left: '-=300px'}, "60");
		div.animate({left: '+=50px'}, "10");
		div.animate({left: '-=20px'}, "4");
		div.animate({left: '+=10px'}, "2");
	}); 
	// animation stop  $(selector).stop(stopAll,goToEnd); http://www.w3schools.com/jquery/jquery_stop.asp
    $("button.stop").click(function(){
		$("div.left").stop(true);
	}); 
	
});