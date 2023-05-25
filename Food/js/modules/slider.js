function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
	const sliderNode = document.querySelector(container),
		btnPrev = sliderNode.querySelector(prevArrow),
		btnNext = sliderNode.querySelector(nextArrow),
		slides = sliderNode.querySelectorAll(slide),
		current = sliderNode.querySelector(currentCounter),
		slidesWrapper = sliderNode.querySelector(wrapper),
		slidesField = sliderNode.querySelector(field),
		slideWidth = window.getComputedStyle(slidesWrapper).width,
		width = deleteNotDigits(slideWidth);


	let slideIndex = 0;
	let offset = 0;

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		}
		return num;
	}
	
	sliderNode.querySelector(totalCounter).textContent = getZero(slides.length);

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => slide.style.width = slideWidth);

	sliderNode.style.position = 'relative';
	const dotsParentNode = document.createElement('ol');
	dotsParentNode.classList.add('carousel-indicators');
	dotsParentNode.style.cssText = `
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 15;
			display: flex;
			justify-content: center;
			margin-right: 15%;
			margin-left: 15%;
			list-style: none;
		`;
	sliderNode.append(dotsParentNode);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.classList.add('dot');
		dot.style.cssText = `
			box-sizing: content-box;
			flex: 0 1 auto;
			width: 30px;
			height: 6px;
			margin-right: 3px;
			margin-left: 3px;
			cursor: pointer;
			background-color: #fff;
			background-clip: padding-box;
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
			opacity: .5;
			transition: opacity .6s ease;
		`;
		dotsParentNode.append(dot);
	}

	function deleteNotDigits(str) {
		return +str.replace(/\D/g, '');
	}

	const dots = dotsParentNode.querySelectorAll('.dot');

	const showIndex = () => {
		dots.forEach(dot => dot.style.opacity = '.5');

		if (slideIndex > slides.length - 1) {
			slideIndex = 0;
		}

		if (slideIndex < 0) {
			slideIndex = slides.length - 1;
		}

		dots[slideIndex].style.opacity = '1';
		current.textContent = getZero(slideIndex + 1);
	};

	const showSlide = (i = 0) => {
		slideIndex = i;
		offset = width * i;
		showIndex();
		slidesField.style.transform = `translateX(-${offset}px)`;
	};

	const nextSlide = () => {
		if (offset == width * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += width;
		}

		slideIndex++;
		showIndex();
		slidesField.style.transform = `translateX(-${offset}px)`;
	};

	const prevSlide = () => {
		if (offset == 0) {
			offset = width * (slides.length - 1);
		} else {
			offset -= width;
		}

		slideIndex--;
		showIndex();
		slidesField.style.transform = `translateX(-${offset}px)`;
	};

	showIndex();

	btnNext.addEventListener('click', nextSlide);
	btnPrev.addEventListener('click', prevSlide);

	dotsParentNode.addEventListener('click', (e) => {
		dots.forEach((dot, i) => {
			if (e.target == dot) {
				showSlide(i);
			}
		});
	});
}

export default slider;