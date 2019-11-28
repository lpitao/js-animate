class snow{
	constructor(options){
		this.container = document.querySelector('#leafContainer');
		this.leafDiv  = document.createElement('div');
		this.image = document.createElement('img');
	}
	init(){
		this.container.appendChild(this.createALeaf());
		
	}
	randomInteger(low, high){
		return low + Math.floor(Math.random() * (high - low));
	}
	randomFloat(low, high) {
	    return low + Math.random() * (high - low);
	}
	pixelValue(value) {
	    return value + 'px';
	}
	durationValue(value) {
	    return value + 's';
	}
	createALeaf() {
	    this.image.src = 'sx' + this.randomInteger(1, 8) + '.png';
	    this.leafDiv.style.top = "-100px";
	    this.leafDiv.style.left = this.pixelValue(this.randomInteger(0, 1500));
	    this.spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
	    this.leafDiv.style.webkitAnimationName = 'fade, drop';
	    this.image.style.webkitAnimationName = this.spinAnimationName;
	    this.fadeAndDropDuration = this.durationValue(this.randomFloat(5, 11));
	    this.spinDuration = this.durationValue(this.randomFloat(4, 8));
	    this.leafDiv.style.webkitAnimationDuration = this.fadeAndDropDuration + ', ' + this.fadeAndDropDuration;
	    this.leafDelay = this.durationValue(this.randomFloat(0, 5));
	    this.leafDiv.style.webkitAnimationDelay = this.leafDelay + ', ' + this.leafDelay;
	    this.image.style.webkitAnimationDuration = this.spinDuration;
	    this.leafDiv.appendChild(this.image);
	    return this.leafDiv;
	}
}

$(function(){
	const NUMBER_OF_LEAVES = 10;
	$('<div id="leafContainer"></div>').appendTo('.change-bg');
	
	 for(let i = 0; i < NUMBER_OF_LEAVES; i++){
		let snowNew = new snow();
		snowNew.init();
	 	console.log(2)
	 }	
	
})