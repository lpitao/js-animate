class snow{
	constructor(options){
		this.defaults  = {
						minSize        : 10,        //雪花的最小尺寸
						maxSize        : 20,        //雪花的最大尺寸
						flakeColor    : "#FFFFFF",
						container     : '$(".page")'
					},
		options     = $.extend({}, this.defaults, options);
		this.minSize = options.minSize;
		this.maxSize = options.maxSize;
		this.flakeColor = options.flakeColor;
		this.container = options.container
		
		this.$flake             = $('<div id="snowbox" />').css({'position': 'absolute', 'top': '-50px'}).html('&#10052;');
		this.documentHeight     = $(document).height();
		this.documentWidth    = $(document).width();
			
		this.startPositionLeft     = Math.random() * this.documentWidth - 100,
		this.startOpacity          = 0.5 + Math.random(),
		this.sizeFlake             = this.minSize + Math.random() * this.maxSize,
		this.endPositionTop        = this.documentHeight - 40,
		this.endPositionLeft       = this.startPositionLeft - 100 + Math.random() * 500,
		this.durationFall          = this.documentHeight * 10 + Math.random() * 5000;
	}
	init(){
		this.$flake.clone().appendTo(this.container).css({
			left: this.startPositionLeft,
			opacity: this.startOpacity,
			'font-size': this.sizeFlake,
			color: this.flakeColor
		}).animate({
				top: this.endPositionTop,
				left: this.endPositionLeft,
				opacity: 0.2
			},this.durationFall,'linear',function(){
				$(this).remove()
			}
		);
	}
}


