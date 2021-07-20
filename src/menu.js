import './menu.css';
import pancakes from './ededdneddy/pancakes.jpg';

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
				this.menuItem1();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
				this.makeItemCard();
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
			menuItem1: function () {
				this.item1 = document.createElement('div');
				this.item1.classList.add('itemCard', 'item1');
				this.mwrapper.appendChild(this.item1);
				this.icon = new Image();
				this.icon.classList.add('imgicon');
				this.icon.src = pancakes;
				this.item1.appendChild(this.icon);
			},
		};
		menu.init();
	})();
}
