class flower{
	constructor(options) {
		options = $.extend({
			flakeContainer : null,
			visualHeight : 940,
			visualWidth : 1640,
			snowflakeURl : []  
		}, options || {})
	    
		
		this.snowflakeURl = options.snowflakeURl;
		this.visualHeight = options.visualHeight;
		this.visualWidth = options.visualWidth;
		this.flakeContainer = options.flakeContainer;
		// 运动的轨迹
		this.startPositionLeft = Math.random() * visualWidth - 100,
		this.startOpacity    = 1,
		this.endPositionTop  = this.visualHeight - 40,
		this.endPositionLeft = this.startPositionLeft - 100 + Math.random() * 500,
		this.duration        = visualHeight * 10 + Math.random() * 5000;
		// 随机透明度，不小于0.5
		this.randomStart = Math.random();
		this.randomStart = this.randomStart < 0.5 ? this.startOpacity : this.randomStart;
	}
	init(){
		this.url = this.getImagesName();
		this.roll()
	}
	getImagesName() {
		return this.snowflakeURl[[Math.floor(Math.random() * 8)]];
	}
	createSnowBox() {	
		return $('<div class="snowbox" />').css({
			'width': 25,
			'height': 26,
			'position': 'absolute',
			'backgroundRepeat':'no-repeat',
			'zIndex': 100000,
			'top': '-41px',
			'backgroundImage': 'url(' + this.url + ')'
		}).addClass('snowRoll');
	}
	roll(){
		// 创建一个雪花
		this.flake = this.createSnowBox();
		// 设计起点位置
		this.flake.css({
			left: this.startPositionLeft,
			opacity : this.randomStart
		});
		// 加入到容器
		this.flakeContainer.append(this.flake);
		// 开始执行动画
		this.flake.transition({
			top: this.endPositionTop,
			left: this.endPositionLeft,
			opacity: 0.7
		}, this.duration, 'ease-out', function() {
			$(this).remove() //结束后删除
		});
	}
}
