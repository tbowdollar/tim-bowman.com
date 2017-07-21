
// Global Variables
const alpha = document.getElementById('alpha');
const bravo = document.getElementById('bravo');
const gamma = document.getElementById('gamma');
const delta = document.getElementById('delta');
const logo = document.getElementsByClassName('logo')[0];
var navItem = document.getElementById('nav').getElementsByTagName('a');
// Functions

// Get element height
function elementHeight(e) {
	return e.getBoundingClientRect().top;	
}

// Onscroll events
onscroll = function() {
	
	// Logo
	if(elementHeight(bravo) <= 0) {
		logo.style.color = '#000';
		if(elementHeight(bravo) != 0 && elementHeight(delta) <= 0) {
			logo.style.color = '#fff';
		}
	} else {
		logo.style.color = '#fff';
	}

	//Nav
	if (elementHeight(alpha) >= -10 && elementHeight(alpha) <= 50) {
		navItem[0].classList.add('active');
		navItem[1].classList.remove('active');
		navItem[2].classList.remove('active');
		navItem[3].classList.remove('active');
		navItem[4].classList.remove('active');
	} else if (elementHeight(bravo) >= -10 && elementHeight(bravo) <= 50 ) {
		navItem[0].classList.remove('active');
		navItem[1].classList.add('active');
		navItem[2].classList.remove('active');
		navItem[3].classList.remove('active');
		navItem[4].classList.remove('active');
	} else if (elementHeight(gamma) >= -10 && elementHeight(gamma) <= 50) {
		navItem[0].classList.remove('active');
		navItem[1].classList.remove('active');
		navItem[2].classList.add('active');
		navItem[3].classList.remove('active');
		navItem[4].classList.remove('active');
	} else if (elementHeight(delta) >= -10 && elementHeight(delta) <= 50) {
		navItem[0].classList.remove('active');
		navItem[1].classList.remove('active');
		navItem[2].classList.remove('active');
		navItem[3].classList.add('active');
		navItem[4].classList.remove('active');
	} else if (elementHeight(zeta) >= -10 && elementHeight(zeta) <= 50) {
		navItem[0].classList.remove('active');
		navItem[1].classList.remove('active');
		navItem[2].classList.remove('active');
		navItem[3].classList.remove('active');
		navItem[4].classList.add('active');
	}
	
	
}
