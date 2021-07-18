import './header.css';

export default function header() {
	'use strict';
	(function () {
		const info = {
			init: function () {
				this.cacheDom();
				this.testing();
			},
			cacheDom: function () {
				this.content = document.querySelector('#content');
			},
			testing: function () {
				this.test = document.createElement('div');
				this.test.textContent = 'i would like this text to be green';
				this.content.appendChild(this.test);
			},
		};
		info.init();
	})();
}
