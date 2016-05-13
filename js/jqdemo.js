$(document).ready(function($) {
	
    $("button.hide").click(function(){
        $("div.hideshow").hide(1000);
	});
    $("button.show").click(function(){
        $("div.hideshow").show(1000);
	});
	
	
    $("button.toggle").click(function(){
        $("div.toggle").toggle(1000);
	});
	
	
    $("button.fadeIn").click(function(){
        $("div.fade").fadeIn(1000);
	});
    $("button.fadeOut").click(function(){
        $("div.fade").fadeOut(1000);
	});
	
	
    $("button.fadeToggle").click(function(){
        $("div.fadeToggle").fadeToggle(1000);
	});
	
	
    $("button.slideUp").click(function(){
        $("div.slide").slideUp(1000);
	});
    $("button.slideDown").click(function(){
        $("div.slide").slideDown(1000);
	});
	
	
    $("button.slideToggle").click(function(){
        $("div.slideToggle").slideToggle(1000);
	});
	
	
	
});