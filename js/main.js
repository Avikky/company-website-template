// Sticky menu background
window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		document.querySelector('.main-nav').style.opacity = 0.9;
	} else {
		document.querySelector('.main-nav').style.opacity = 1;
	}
});

// Smooth Scrolling
$('.main-nav a, .btn').on('click', function (e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
				scrollTop: $(hash).offset().top - 100
			},
			800
		);
	}
});

// Handburger menu effect
const getElement = document.querySelector('#hide');
getElement.style.display = 'none';

const menu = document.querySelector('#menu');
menu.addEventListener('click', function myfuction() {
	createMobileMenu();
});

window.addEventListener('click', outsideClick);

function createMobileMenu() {
	if (getElement.style.display === 'none') {
		getElement.style.display = 'block';

	} else {
		getElement.style.display = 'none';
	}

	function outsideClick(e) {
		if (e.target == getElement) {
			console.log('clicked outside');
		}
	}
}

// modal box script

// Get main modal box
const mainModal = document.getElementById('mainModal');
// Get feedback modal
const feedbackModal = document.getElementById('feedbackModal');
// Get modal btn
const modalBtn = document.querySelector('.modal-btn');
//Get modal-form submit button 
const modalSubmit = document.getElementById('modalSubmit');
// Get closeBtn For main modal 
const closeMainModalBtn = document.querySelector('.closeMainModalBtn');
// Get closeBtn For FeedbackModal 
const closeFeedbackBtn = document.querySelector('.closeFeedbackBtn');
// Listen for modal button click event
modalBtn.addEventListener('click', openMainModal);
// Listen for close button click event 
closeFeedbackBtn.addEventListener('click', closeFeedbackModal);
closeMainModalBtn.addEventListener('click', closeMainModal)
// listen for modal form submit
modalSubmit.addEventListener('click', displayFeedbackModal);

window.addEventListener('click', outsideClick);

const placeErrMsg = document.querySelector('#errMsg');

// function to open main modal
function openMainModal() {
	mainModal.style.display = 'block';
}

// function to close main modal
function closeMainModal() {
	mainModal.style.display = 'none';
}

// function to close Feedback modal
function closeFeedbackModal() {
	feedbackModal.style.display = 'none';
}

// function to display feedback modal
function displayFeedbackModal() {
	mainModal.style.display = 'none';
	feedbackModal.style.display = 'block';
}

// fucntion to close feedback modal on outside click

function outsideClick(e) {
	if (e.target == feedbackModal) {
		feedbackModal.style.display = 'none';
	}
}