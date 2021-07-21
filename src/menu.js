import './menu.css';
import pancakes from './ededdneddy/pancakes.png';
import nasty from './ededdneddy/nastyburgs.png';
import chunky from './ededdneddy/chunkypuffs.png';
import jujubee from './ededdneddy/jujubees.png';
import fudge from './ededdneddy/fudge.png';
import jawbreaker from './ededdneddy/alljbs.png';

export default function myMenu() {
	'use strict';
	(function () {
		const menu = {
			init: function () {
				this.cacheDom();
			},
			cacheDom: function () {
				this.content = document.querySelector('.appendContentHere');
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
				this.menuItem2();
				this.menuItem3();
				this.menuItem4();
				this.menuItem5();
				this.menuItem6();
			},
			menuItem: function (itemNum, title, image, desc) {
				this.itemNum = document.createElement('div');
				this.itemNum.classList.add('itemCard', itemNum);
				this.mwrapper.appendChild(this.itemNum);
				this.itemtitle = document.createElement('div');
				this.itemtitle.classList.add('title');
				this.itemtitle.textContent = title;
				this.itemNum.appendChild(this.itemtitle);
				this.icon = new Image();
				this.icon.classList.add('imgicon');
				this.icon.src = image;
				this.itemNum.appendChild(this.icon);
				this.itemDesc = document.createElement('div');
				this.itemDesc.classList.add('itemDesc');
				this.itemDesc.textContent = desc;
				this.itemNum.appendChild(this.itemDesc);
			},
			menuItem1: function () {
				this.menuItem(
					'item1',
					'Ketchup Pancakes',
					pancakes,
					'Pancakes with ketchup'
				);
			},
			menuItem2: function () {
				this.menuItem(
					'item2',
					'The Kanker Burger',
					nasty,
					'Greasy, overflowing with sauce'
				);
			},
			menuItem3: function () {
				this.menuItem('item3', 'Chunky Puffs', chunky, 'Cereal, low in fat');
			},
			menuItem4: function () {
				this.menuItem('item4', 'Jujube', jujubee, 'Chewy candy');
			},
			menuItem5: function () {
				this.menuItem('item5', 'Fudge', fudge, 'Chocolate candy treat');
			},
			menuItem6: function () {
				this.menuItem(
					'item6',
					'Jawbreaker',
					jawbreaker,
					'Sold out indefinitely'
				);
			},
		};
		menu.init();
	})();
}
