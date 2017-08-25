// vars
var wrapper = document.getElementsByClassName('wrapper');
var hero = document.getElementById('hero').getElementsByTagName('h1')[0];
var header = document.getElementById('header');
var aboutspan = document.getElementById('about').getElementsByTagName('span')[0];


// functions
function fadeIn(e) {
	e.style.opacity = 1;
}
function fadeOut(e) {
	e.style.opacity = 0;
}
function addClass(e, c) {
	e.classList.add(c);
}
function removeClass(e, c) {
	e.classList.remove(c);
}
// hero sequence
var heroTxt = ['Front-End Developer', 'Sydney', 'Tim Bowman'];

        heroSequence(0);
        function heroSequence(i) {

            if (heroTxt.length > i) {
                setTimeout(function(){
									fadeOut(hero);
								}, 2000);
								setTimeout(function(){
									hero.textContent = heroTxt[i];
								}, 3000);
								setTimeout(function(){
									fadeIn(hero);
									heroSequence(++i);
								}, 3000);

            } else if (heroTxt.length == i) { // Loop
                heroSequence(0);
            }

        }

				// about sequence

				var aboutTxt = ['Emails', 'Websites', 'Landing Pages', 'Innovation', 'Coding'];

				        aboutSequence(0);
				        function aboutSequence(i) {

				            if (aboutTxt.length > i) {

												setTimeout(function(){
													aboutspan.textContent = aboutTxt[i];
													aboutSequence(++i);
												}, 2000);


				            } else if (aboutTxt.length == i) { // Loop
				                aboutSequence(0);
				            }

				        }


// events
window.addEventListener('load', function() {
	fadeIn(wrapper[0]);
});

window.addEventListener('scroll', function() {
	if(window.pageYOffset > 0) {
		addClass(header, 'active');
	} else {
		removeClass(header, 'active');
	}
	if(window.pageYOffset > 15) {
		fadeIn(wrapper[1]);
	} else {
		fadeOut(wrapper[1]);
	}
	if(window.pageYOffset > 340) {
		fadeIn(wrapper[2]);
	} else {
		fadeOut(wrapper[2]);
	}
});
