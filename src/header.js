import './header.css';

export default function header() {
	'use strict';
	(function () {
		const info = {
			init: function () {
				this.cacheDom();
				this.headwrapper();
				this.restaurantName();
				this.buttonwrap();
			},
			cacheDom: function () {
				this.content = document.querySelector('#content');
			},
			headwrapper: function () {
				this.hwrapper = document.createElement('div');
				this.hwrapper.classList.add('hwrapper');
				this.content.appendChild(this.hwrapper);
			},
			restaurantName: function () {
				this.restname = document.createElement('div');
				this.restname.textContent = 'Butter Toast';
				this.restname.classList.add('btoast');
				this.hwrapper.appendChild(this.restname);
			},
			buttonwrap: function () {
				this.bwrap = document.createElement('div');
				this.bwrap.classList.add('bwrap');
				this.hwrapper.appendChild(this.bwrap);
				this.buttonOne();
				this.buttonTwo();
				this.buttonThree();
			},
			buttonOne: function () {
				this.bone = document.createElement('button');
				this.bone.textContent = 'about';
				this.bone.classList.add('bone', 'btn');
				this.bwrap.appendChild(this.bone);
			},
			buttonTwo: function () {
				this.btwo = document.createElement('button');
				this.btwo.textContent = 'menu';
				this.btwo.classList.add('btwo', 'btn');
				this.bwrap.appendChild(this.btwo);
			},
			buttonThree: function () {
				this.bthree = document.createElement('button');
				this.bthree.textContent = 'contact';
				this.bthree.classList.add('bthree', 'btn');
				this.bwrap.appendChild(this.bthree);
			},
		};
		info.init();
	})();
}
