function modalOpen(modalSelector, modalTimerId) {
	const modalNode = document.querySelector(modalSelector);

	modalNode.classList.add('show');
	modalNode.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}
function modalClose(modalSelector) {
	const modalNode = document.querySelector(modalSelector);

	modalNode.classList.add('hide');
	modalNode.classList.remove('show');
	document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
	const modalNode = document.querySelector(modalSelector),
		modalTrigger = document.querySelectorAll(triggerSelector);

	modalTrigger.forEach(modal => {
		modal.addEventListener('click', () => modalOpen(modalSelector, modalTimerId));
	})

	modalNode.addEventListener('click', (e) => {
		if (e.target == modalNode || e.target.getAttribute('data-close') == "")
			modalClose(modalSelector);
	});

	document.addEventListener('keydown', (e) => {
		if (e.code == 'Escape' && modalNode.classList.contains('show'))
			modalClose(modalSelector);
	});

	// Модальное окно после скролла сверху
	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.
			documentElement.scrollHeight - 1) {
			modalOpen(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export { modalClose };
export { modalOpen };