$(function(){
	var page = '<div class="page"></div>'
	$(".change-bg").append(page);
	
	var Timerr;
	function aa(){
		for(var i=0;i<4;i++){
			// var m=parseInt(Math.random()*700+100);
			var j2=parseInt(Math.random()*300+1200);
			var j=parseInt(Math.random()*500+000);
			var j1=parseInt(Math.random()*500+800);
		    var n=parseInt(Math.random()*10+(-10));
			$('.page').prepend('<div></div>')
			$('.page').children('div').eq(0).css({'left':j,'top':$(window).height()/2})
			$('.page').children('div').eq(0).animate({'left':j1,'top':n},j2)
		}
	}
	aa();
	setInterval(function(){
		aa();	
	},300)
	setInterval(function(){
		for(var jj=0;jj<$('.page>div').size()/4;jj++){
			$('.page>div').eq($('.page>div').size()-jj).remove();
		}
	},150)	
})