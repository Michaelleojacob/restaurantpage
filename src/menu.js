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
			menuItem1: function () {
				this.item1 = document.createElement('div');
				this.item1.classList.add('itemCard', 'item1');
				this.mwrapper.appendChild(this.item1);
				this.itemtitle = document.createElement('div');
				this.itemtitle.classList.add('title');
				this.itemtitle.textContent = 'Ketchup Pancakes';
				this.item1.appendChild(this.itemtitle);
				this.icon = new Image();
				this.icon.classList.add('imgicon');
				this.icon.src = pancakes;
				this.item1.appendChild(this.icon);
				this.itemDesc = document.createElement('div');
				this.itemDesc.classList.add('itemDesc');
				this.itemDesc.textContent = 'Pancakes with ketchup';
				this.item1.appendChild(this.itemDesc);
			},
			menuItem2: function () {
				this.item2 = document.createElement('div');
				this.item2.classList.add('itemCard', 'item2');
				this.mwrapper.appendChild(this.item2);
				this.itemtitle = document.createElement('div');
				this.itemtitle.classList.add('title');
				this.itemtitle.textContent = 'The Kanker Burger';
				this.item2.appendChild(this.itemtitle);
				this.icon = new Image();
				this.icon.classList.add('imgicon');
				this.icon.src = nasty;
				this.item2.appendChild(this.icon);
				this.itemDesc = document.createElement('div');
				this.itemDesc.classList.add('itemDesc');
				this.itemDesc.textContent = 'Greasy, overflowing with sauce';
				this.item2.appendChild(this.itemDesc);
			},
			menuItem3: function () {
				this.item3 = document.createElement('div');
				this.item3.classList.add('itemCard', 'item3');
				this.mwrapper.appendChild(this.item3);
				this.itemtitle = document.createElement('div');
				this.itemtitle.classList.add('title');
				this.itemtitle.textContent = 'Chunky Puffs';
				this.item3.appendChild(this.itemtitle);
				this.icon = new Image();
				this.icon.classList.add('imgicon');
				this.icon.src = chunky;
				this.item3.appendChild(this.icon);
				this.itemDesc = document.createElement('div');
				this.itemDesc.classList.add('itemDesc');
				this.itemDesc.textContent = 'Cereal, Low in fat';
				this.item3.appendChild(this.itemDesc);
			},
			menuItem4: function () {
				this.item4 = document.createElement('div');
				this.item4.classList.add('itemCard', 'item4');
				this.mwrapper.appendChild(this.item4);
				this.itemtitle = document.createElement('div');
				this.itemtitle.classList.add('title');
				this.itemtitle.textContent = 'Jujubes';
				this.item4.appendChild(this.itemtitle);
				this.icon = new Image();
				this.icon.classList.add('imgicon');
				this.icon.src = jujubee;
				this.item4.appendChild(this.icon);
				this.itemDesc = document.createElement('div');
				this.itemDesc.classList.add('itemDesc');
				this.itemDesc.textContent = 'Chewy candy';
				this.item4.appendChild(this.itemDesc);
			},
			menuItem5: function () {
				this.item5 = document.createElement('div');
				this.item5.classList.add('itemCard', 'item5');
				this.mwrapper.appendChild(this.item5);
				this.itemtitle = document.createElement('div');
				this.itemtitle.classList.add('title');
				this.itemtitle.textContent = 'Fudge';
				this.item5.appendChild(this.itemtitle);
				this.icon = new Image();
				this.icon.classList.add('imgicon');
				this.icon.src = fudge;
				this.item5.appendChild(this.icon);
				this.itemDesc = document.createElement('div');
				this.itemDesc.classList.add('itemDesc');
				this.itemDesc.textContent = 'Chocolate candy treat';
				this.item5.appendChild(this.itemDesc);
			},
			menuItem6: function () {
				this.item6 = document.createElement('div');
				this.item6.classList.add('itemCard', 'item6');
				this.mwrapper.appendChild(this.item6);
				this.itemtitle = document.createElement('div');
				this.itemtitle.classList.add('title');
				this.itemtitle.textContent = 'Jawbreakers';
				this.item6.appendChild(this.itemtitle);
				this.icon = new Image();
				this.icon.classList.add('imgicon');
				this.icon.src = jawbreaker;
				this.item6.appendChild(this.icon);
				this.itemDesc = document.createElement('div');
				this.itemDesc.classList.add('itemDesc');
				this.itemDesc.textContent = 'Sold out indefinitely';
				this.item6.appendChild(this.itemDesc);
			},
		};
		menu.init();
	})();
}
