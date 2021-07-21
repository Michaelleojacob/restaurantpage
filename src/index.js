import './style.css';
import header from './header';
import about from './about';
import menu from './menu';
import contact from './contact';
import footer from './footer';

header();

(function () {
	const handleRender = {
		init: function () {
			this.cacheDom();
			this.appendHereHarderDaddy();
			this.addClickEvent();
		},
		cacheDom: function () {
			this.content = document.querySelector('#content');
			this.appendContentHere = document.querySelector('.appendContentHere');
		},
		appendHereHarderDaddy: function () {
			this.appendContentHere = document.createElement('div');
			this.appendContentHere.classList.add('appendContentHere');
			this.content.appendChild(this.appendContentHere);
		},
		addClickEvent: function () {
			this.content.addEventListener('click', this.clickLogic);
		},
		removeAllChildNodes: function (parent) {
			while (parent.firstChild) {
				parent.removeChild(parent.firstChild);
			}
		},
		clickLogic: function (event) {
			if (event.target.className.includes('bone')) {
				handleRender.removeAllChildNodes(handleRender.appendContentHere);
				about();
			}
			if (event.target.className.includes('btwo')) {
				handleRender.removeAllChildNodes(handleRender.appendContentHere);
				menu();
			}
			if (event.target.className.includes('bthree')) {
				handleRender.removeAllChildNodes(handleRender.appendContentHere);
				contact();
			}
		},
	};
	handleRender.init();
})();
// about();
menu();
footer();
