$(function(){
	var page = '<div class="page"></div>'
	$(".change-bg").append(page);
})

class star{
	constructor(options){		
		options = $.extend({
			container : null,
			time : parseInt(Math.random() * 300 + 1200),
			left : parseInt(Math.random() * 500 + 800),
			leftEnd : parseInt(Math.random() * 500 + 1000),
			topEnd : parseInt(Math.random() * 10 + (-10)),
		}, options || {})
		this.container = options.container;
		this.time = options.time;
		this.left = options.left;
		this.leftEnd = options.leftEnd;
		this.topEnd = options.topEnd;
	}
	init(){
		this.container.prepend('<div></div>')
		this.container.children('div').eq(0).css({'left':this.left,'top':$(window).height()/2})
		this.container.children('div').eq(0).animate({'left':this.leftEnd,'top':this.topEnd},this.time)
	}
}
setInterval(() => {
	var starNew = new star({
		container: $('.page')
	});
	starNew.init()
},300)
setInterval(() => {
	for(var i = 0; i < $(".page > div").size() / 4; i++){
		$('.page>div').eq($('.page>div').size()-i).remove();
	}
},150)