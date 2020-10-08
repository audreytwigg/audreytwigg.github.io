// Begin Script - jQuery Floating Menu V 2.0 2016



var FMpath = "white"	// MENU IMAGE PATH | black | white |



document.write('<div id="menuJF" class="printhide"><div id="menu-HT sidemenu">');


// START LINKS


document.write('<a href="index.html" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left">HOME</a>');


document.write('<a href="index.html#about" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left">ABOUT</a>');


document.write('<a href="index.html#work" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left">WORK</a>');


document.write('<a href="index.html#resume" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left">RESUME</a>');


document.write('<a href="#contact" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left">CONTACT</a>');


document.write('<a href="https://www.instagram.com/audrey_twigg/" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left"><i class="fab fa-instagram fa-lg"></i></a>');


document.write('<a href="https://www.behance.net/audreytwigg" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left"><i class="fab fa-behance fa-lg"></i></a>');


document.write('<a href="https://www.twitch.tv/twigglybits" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left"><i class="fab fa-twitch fa-lg"></i></a>');


document.write('<a href="https://www.linkedin.com/in/audrey-twigg-4668b1184/" class="w3-bar-item w3-button w3-padding-16 w3-collapse w3-animate-left"><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>');


// END LINKS


document.write('</div></div>');






// START FLOATING SCRIPT
// 2016 © Allwebco Design Corporation
// YOU DO NOT NEED TO EDIT BELOW THIS LINE

var menuPosition = $('#menuJF').css;

// START SCRIPT - ANIMATION SPEED IS MICROSECONDS

function FloatMenu(){
	var animationSpeed=1500;
	var animationEasing='easeOutQuint';
	var scrollAmount=$(document).scrollTop();
	var newPosition=menuPosition+scrollAmount;
	if($(window).height()<$('#menuJF').height()+$('#menuJF .menu-HT').height()){
		$('#menuJF').css('top',menuPosition);
	} else {
		$('#menuJF').stop().animate({top: newPosition}, animationSpeed, animationEasing);
	}
}
$(window).load(function() {
	menuPosition=$('#menuJF').position().top;
	FloatMenu();
});
$(window).scroll(function () { 
	FloatMenu();
});

