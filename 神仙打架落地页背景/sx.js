$(function(){
	$('<div id="leafContainer"></div>').appendTo('.change-bg');
	const NUMBER_OF_LEAVES = 10;
	
	
	function init() {
	    var container = document.getElementById('leafContainer');
	    for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
	        container.appendChild(createALeaf());
	    }
	}
	
	function randomInteger(low, high) {
	    return low + Math.floor(Math.random() * (high - low));
	}
	
	function randomFloat(low, high) {
	    return low + Math.random() * (high - low);
	}
	
	function pixelValue(value) {
	    return value + 'px';
	}
	
	function durationValue(value) {
	    return value + 's';
	}
	
	function createALeaf() {
	    var leafDiv = document.createElement('div');
	    var image = document.createElement('img');
	    image.src = 'sx' + randomInteger(1, 8) + '.png';
	    leafDiv.style.top = "-100px";
	    leafDiv.style.left = pixelValue(randomInteger(0, 1500));
	    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
	    leafDiv.style.webkitAnimationName = 'fade, drop';
	    image.style.webkitAnimationName = spinAnimationName;
	    var fadeAndDropDuration = durationValue(randomFloat(5, 11));
	    var spinDuration = durationValue(randomFloat(4, 8));
	    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
	    var leafDelay = durationValue(randomFloat(0, 5));
	    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
	    image.style.webkitAnimationDuration = spinDuration;
	    leafDiv.appendChild(image);
	    return leafDiv;
	}
	init()
});
