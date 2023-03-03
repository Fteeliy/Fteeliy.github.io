const slides = document.querySelectorAll('.slide');

slides.forEach(el => {
	el.addEventListener('click', () => {
		clearActiveClasses();
		el.classList.add('active');
	});
});

function clearActiveClasses() {
	slides.forEach(el => {
		el.classList.remove('active');
	});
}