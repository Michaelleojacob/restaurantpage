import './about.css';
import slyEd from './ededdneddy/slyed.jpg';

export default function myAbout() {
	'use strict';
	(function () {
		const about = {
			init: function () {
				this.cacheDom();
				this.aboutSelection();
			},
			cacheDom: function () {
				this.content = document.querySelector('#content');
			},
			aboutSelection: function () {
				this.container = document.createElement('div');
				this.container.classList.add('aboutcontainer');
				this.content.appendChild(this.container);
				this.renderContent();
			},
			renderContent: function () {
				this.firstspan();
				this.secondspan();
				this.imagediv();
				this.thirdspan();
				this.fourthspan();
			},
			firstspan: function () {
				this.fspan = document.createElement('span');
				this.fspan.classList.add('fspan', 'mySpans');
				this.fspan.textContent =
					'This is definitely not an elaborate scam to steal your quaters';
				this.container.appendChild(this.fspan);
			},
			secondspan: function () {
				this.sspan = document.createElement('span');
				this.sspan.classList.add('sspan', 'mySpans');
				this.sspan.textContent = 'Best buttered toast around';
				this.container.appendChild(this.sspan);
			},
			imagediv: function () {
				this.idiv = new Image();
				this.idiv.src = slyEd;
				this.idiv.classList.add('slyEd');
				this.container.appendChild(this.idiv);
			},
			thirdspan: function () {
				this.tspan = document.createElement('span');
				this.tspan.classList.add('tspan', 'mySpans');
				this.tspan.textContent = 'Stop by, call or order online today!';
				this.container.appendChild(this.tspan);
			},
			fourthspan: function () {
				this.fourthspan = document.createElement('span');
				this.fourthspan.classList.add('fourthspan', 'mySpans');
				this.fourthspan.textContent =
					'This is definitely a scam to steal your quaters and buy jaw-breaks for the Ed boys';
				this.container.appendChild(this.fourthspan);
			},
		};
		about.init();
	})();
}
