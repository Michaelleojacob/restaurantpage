import './menu.css';

export default function myMenu() {
	'use strict';
	(function () {
		const menu = {
			init: function () {
				this.cacheDom();
			},
			cacheDom: function () {
				this.content = document.querySelector('#content');
				this.menuwrapper();
			},
			menuwrapper: function () {
				this.mwrapper = document.createElement('div');
				this.mwrapper.classList.add('mwrapper');
				this.content.appendChild(this.mwrapper);
				this.renderCards();
			},
			renderCards: function () {
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
			},
			makeItemCard: function () {
				this.itemCard = document.createElement('div');
				this.itemCard.classList.add('itemCard');
				this.mwrapper.appendChild(this.itemCard);
			},
			makeIcon: function () {},
		};
		menu.init();
	})();
}
