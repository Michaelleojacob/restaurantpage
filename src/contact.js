import './contact.css';
import culdesac from './ededdneddy/culdesac.jpg';

export default function contactMe() {
	'use strict';
	(function () {
		const contact = {
			init: function () {
				this.cacheDom();
			},
			cacheDom: function () {
				this.content = document.querySelector('#content');
				this.contactwrapper();
			},
			contactwrapper: function () {
				this.conwrapper = document.createElement('div');
				this.conwrapper.classList.add('conwrapper');
				this.content.appendChild(this.conwrapper);
				this.renderContactContent();
			},
			renderContactContent: function () {
				this.divone();
				this.divtwo();
				this.imageOfCuldesac();
			},
			divone: function () {
				this.phone = document.createElement('div');
				this.phone.classList.add('phone');
				this.phone.textContent = `Phone: 123-456-7890`;
				this.conwrapper.appendChild(this.phone);
			},
			divtwo: function () {
				this.address = document.createElement('div');
				this.address.classList.add('address');
				this.address.textContent = `Address: 220 Rethink Avenue`;
				this.conwrapper.appendChild(this.address);
			},
			imageOfCuldesac: function () {
				this.imagetext = document.createElement('span');
				this.imagetext.textContent = 'Location:';
				this.imagetext.classList.add('cultext');
				this.culdesac = new Image();
				this.culdesac.src = culdesac;
				this.culdesac.classList.add('culdesac');
				this.conwrapper.appendChild(this.imagetext);
				this.conwrapper.appendChild(this.culdesac);
			},
		};
		contact.init();
	})();
}
