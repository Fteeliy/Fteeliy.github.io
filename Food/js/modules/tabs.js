function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	const tabsBtnsParentNode = document.querySelector(tabsParentSelector),
		tabBtnsNodes = document.querySelectorAll(tabsSelector),
		tabContentNodes = document.querySelectorAll(tabsContentSelector);

	const hideTabContent = () => {
		tabContentNodes.forEach(tab => {
			tab.classList.add('hide');
			tab.classList.remove('show', 'fade');
		});

		tabBtnsNodes.forEach(btn => {
			btn.classList.remove(activeClass);
		});
	};

	const showTabContent = (i = 0) => {
		tabContentNodes[i].classList.add('show', 'fade');
		tabContentNodes[i].classList.remove('hide');
		tabBtnsNodes[i].classList.add(activeClass);
	};

	hideTabContent();
	showTabContent();

	tabsBtnsParentNode.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabBtnsNodes.forEach((btn, i) => {
				if (target == btn) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;