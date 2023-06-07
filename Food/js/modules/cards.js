import { getResource } from "../services/services";

function cards() {
	class MenuCard {
		constructor(src, alt, title, text, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.text = text;
			this.price = price;
			this.classes = classes; // массив будущих классов
			this.parent = document.querySelector(parentSelector);
			this.transfer = 80;
			this.changeToRUB();
		}

		changeToRUB() {
			this.price *= this.transfer;
		}

		render() {
			const div = document.createElement('div');
			if (this.classes.length === 0) { // Если не переданы классы, то дефолтно - menu__item
				this.classes = 'menu__item';
				div.classList.add(this.classes);
			}
			else
				this.classes.forEach(className => div.classList.add(className));
			// div.classList.add('menu__item');
			div.innerHTML = `
			<img src=${this.src} alt=${this.alt}>
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.text}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
				<div class="menu__item-cost">Цена:</div>
				<div class="menu__item-total"><span>${this.price}</span> руб/день</div>
			</div>
			`;
			this.parent.append(div);
		}
	}

	const createCard = (data) => {
		data.forEach(({ img, altimg, title, descr, price }) => {
			new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
		});
	};

	getResource('https://fteeliy.github.io/Food/db.json/menu')
		.then(data => createCard(data));
}

export default cards;