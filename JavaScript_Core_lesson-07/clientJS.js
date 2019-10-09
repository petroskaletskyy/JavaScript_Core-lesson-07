'use strict'

function fillLiWithText() {
	let elements = document.querySelectorAll('.first > li');

	for (let i = 0; i < elements.length; i++) {
		let currentElement = elements[i];
		currentElement.innerHTML = 'Lorem Ipsum ' + i;
	}

	let div = document.getElementById('message');
	div.innerHTML = 'Кількість всіх елементів "LI" всіх списків становить - '
			+ elements.length;

}

function changeToRed() {
	let elementsList = document.querySelectorAll('a');

	for (let i = 0; i < elementsList.length; i++) {
		let currentElement = elementsList[i];
		if (currentElement.href.includes('http://')
				&& (!currentElement.href.includes('http://internal'))
				|| (currentElement.href.includes('ftp://'))) {
			currentElement.className = 'external-red';
		}
	}
}