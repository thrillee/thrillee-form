import { validateEmail, validatePassword } from 'formlee';

export const formData = {
	fields: [
		{
			name: 'email',
			type: 'email',
			label: 'Your email',
			helperText: 'Please your the email you registered with',
			placeholder: 'thrillee@thrillee.thrillee',
			validation: validateEmail,
		},
		{
			name: 'password',
			type: 'password',
			label: 'Enter your password',
			helperText: 'Enter your password',
			placeholder: '',
			validation: validatePassword,
		},
	],
};
