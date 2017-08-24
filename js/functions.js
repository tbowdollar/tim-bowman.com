// vars
var wrapper = document.getElementsByClassName('wrapper')[0];
var hero = document.getElementById('hero').getElementsByTagName('h1')[0];


// functions
function fadeIn(e) {
	e.style.opacity = 1;
}
function fadeOut(e) {
	e.style.opacity = 0;
}
var text = ['Front-End Developer', 'Sydney', 'Tim Bowman'];

        textSequence(0);
        function textSequence(i) {

            if (text.length > i) {
                setTimeout(function(){
									fadeOut(hero);
								}, 2000);
								setTimeout(function(){
									hero.textContent = text[i];
								}, 3000);
								setTimeout(function(){
									fadeIn(hero);
									textSequence(++i);
								}, 3000);

            } else if (text.length == i) { // Loop
                textSequence(0);
            }

        }


// events
window.addEventListener('load', function() {
	fadeIn(wrapper);
});
