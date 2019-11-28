class water{
	constructor(options){
		this.canvas;//画布
		this.context;//画布上下文
		this.width;//背景图片、画布宽
		this.height;//背景图片、画布宽
		this.size;//像素点个数、width*height
		this.nextPoint = [];//下一振幅
		this.prePoint = [];//上一振幅
		this.tempPoint = [];//临时存储
		this.imgData;//背景图片数据
		this.speed = 100;//下雨大小，默认是一秒钟一个雨滴
		this.weight = 1000;//雨滴的大小
		
		this.canvas = document.getElementById('ripper');
		this.context = this.canvas.getContext('2d');
		
	}
	// description:开始启动程序
	start(){
		this.initImage("ha.png");
	}
	// description:初始化图片信息
	initImage(src) {
		let _this = this
	    this.img = new Image();
	    this.img.src = src;
		console.log(this.img)
	    this.img.onload = function() {
	        _this.init(_this.img);
	    };
	}
	// description:初始化系统函数
	init(img){
			this.initSize(img);
	        this.initPoint();
	    	this.initCanvas();
	    	this.loadImage(img);
	}
	/**description:绘制图片函数**/
	loadImage(img){
		this.context.drawImage(img, 0, 0);
		console.log(this.context)
	    this.imgData = this.context.getImageData(0, 0, this.width, this.height);
	    setInterval(this.spread, 1000/60);
	    // setInterval(this.rain, this.speed);
	}
	/**description:初始化画布信息**/
	initCanvas(){
		this.canvas = document.getElementById('ripper');
		console.log(this.context)
	    this.context = this.canvas.getContext('2d');
	    this.canvas.width = this.width;
	    this.canvas.height = this.height;
	    // canvas.onclick = function(e) {
	    //     setDropPoint(floor(e.clientX-(document.body.clientWidth  - width)/2), floor(e.clientY - (document.body.clientHeight  - height) / 2), 15000);
	    // }
	}
	/**description:设置画布宽高及画布像素数**/
	initSize(img){
		this.width = img.width;
		this.height = img.height;
		document.getElementById("box").style.width = this.width+"px";
		document.getElementById("box").style.height = this.height+"px";
		this.size = this.width*this.height;
	}
	/**description:初始化存储图像前一个和后一个点的数组**/
	initPoint(){
		for (var i = 0; i < this.size; i++) {
	        this.nextPoint.push(0);
	        this.prePoint.push(0);
	    }            	
	}
	/**description:一石激起千层浪，设置波动点及注入的能量,其中x表示物体进入水面的X坐标，Y表示物体进入水面的Y坐标，power表示物体的能量大小**/
	setDropPoint(x, y, power) {
	    if (x < 2 || x > width - 2 || y < 1 || y > height - 2) return;
	    var i = x + y * width;
	    this.nextPoint[i] += power;
	    this.nextPoint[i - 1] -= power;
	}
	/**description:核心算法，处理像素的波动效果 PS:该算法非原创，借鉴网络上多个版本算法综合**/
	spread() {
		console.log(this.context)
	    let img = this.context.getImageData(0, 0, this.width, this.height),
	    data = img.data;
		//平均一下各个点的能量
	    for (var i = width + 1; i < size - width - 1; i += 2) {
	        for (var x = 1; x < width - 1; x++, i++) {
	            this.nextPoint[i] = (this.nextPoint[i] + this.nextPoint[i + 1] + this.nextPoint[i - 1] + this.nextPoint[i - width] + this.nextPoint[i + width]) / 5;
	        }
	    }
		//渲染除了第一行、最后一行、第一列、最后一列外的所有点
	    for (var i = width + 1; i < size - width - 1; i += 2) {
	        for (var x = 1; x < width - 1; x++, i++) {
	        	//水波振幅线性公式参考的是网络上的一些研究文献得出的
	            prePoint[i] = (this.nextPoint[i - 1] + this.nextPoint[i + 1] + this.nextPoint[i + width] + this.nextPoint[i - width])/2 - prePoint[i];
	            var ti = i + Math.floor((prePoint[i - 2] - prePoint[i]) * 0.08) + Math.floor((prePoint[i - width] - prePoint[i]) * 0.08) * width;
	            ti = ti < 0 ? 0 : ti > size ? size: ti;
	            var light = prePoint[i] * 2.0 - prePoint[i - 2] * 0.6;
	            light = light < -10 ? -10 : light > 100 ? 100 : light;
	            //之所以是i*4是因为canvas获取的data数据每四个值表示一个像素包括分别是红/绿/蓝/透明,要想了解更多关于canvas的请参看我的另一篇blog：http://blog.csdn.net/qingfeilee/article/details/7233683
	            data[i * 4] = imgData.data[ti * 4] + light;
	            data[i * 4 + 1] = imgData.data[ti * 4 + 1] + light;
	            data[i * 4 + 2] = imgData.data[ti * 4 + 2] + light;
	            //波能渐渐衰减
	            prePoint[i] -= prePoint[i]>>5;
	        }
	    }
	    tempPoint = nextPoint;
	    nextPoint = prePoint;
	    prePoint = tempPoint;
	    context.putImageData(img, 0, 0);
	}
	rain(){
		this.setDropPoint(Math.floor(Math.random()*this.width), Math.floor(Math.random()*this.height), Math.floor(Math.random()*this.weight));
	}
	setWeight(weight){
		this.weight = weight;
	}
	// window.addEventListener("load", start, true);
	//     setWeight('20000');
	newUrl(){
		 var odpsTableName= $("#odpsTableName").text();
		 var ccc =  document.getElementById("newURL")
		 ccc.href = "/odpstabledetail/show?modelName="+ "&odpsTableName=" + odpsTableName;
		 console.log(ccc.href)
		 
	  }
}