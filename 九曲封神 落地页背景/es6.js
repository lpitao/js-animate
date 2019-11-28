$('<div id="content"><div id="snowflake"></div></div>').appendTo('.change-bg');
let container = $("#content");
   visualWidth = container.width();
   visualHeight = container.height();	
   snowflake = $('#snowflake');
const snowflakeURl = [
	'jiu1.png',
	'jiu2.png',
	'jiu3.png',
	'jiu4.png',
	'jiu5.png',
	'jiu6.png',
	'jiu7.png',
	'jiu8.png'
]  

setInterval(function() {
		let fl = new flower({
			snowflakeURl : snowflakeURl,
			visualWidth : visualWidth,
			visualHeight : visualHeight,
			flakeContainer : snowflake
		});
		 fl.init()
}, 500);