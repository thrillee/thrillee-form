import {
	fileInput,
	textInput,
	emailInput,
	radioInput,
	selectInput,
	checkBoxInput,
	textAreaInput,
	passwordInput,
} from './inputGenerator';

import {
	fileInputGrid,
	textInputGrid,
	emailInputGrid,
	radioInputGrid,
	selectInputGrid,
	checkBoxInputGrid,
	textAreaInputGrid,
	passwordInputGrid,
} from './gridInput';

const regularInputTemplates = {
	text: textInput,
	email: emailInput,
	select: selectInput,
	fileInput: fileInput,
	radioInput: radioInput,
	textArea: textAreaInput,
	password: passwordInput,
	checkbox: checkBoxInput,
};

const gridInputTemplates = {
	textGrid: textInputGrid,
	emailGrid: emailInputGrid,
	selectGrid: selectInputGrid,
	fileInputGrid: fileInputGrid,
	radioInputGrid: radioInputGrid,
	checkboxGrid: checkBoxInputGrid,
	passwordGrid: passwordInputGrid,
	textAreaGrid: textAreaInputGrid,
};

export const inputTemplates = {
	...regularInputTemplates,
	...gridInputTemplates,
};
