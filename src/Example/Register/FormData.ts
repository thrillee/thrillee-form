import { validateEmail, validatePassword } from '../../ThrilleeForm/validators';
import { validateConfirmPassword } from './validator';

export const formData = {
	fields: [
		{
			name: 'email',
			type: 'email',
			label: 'Your email',
			helperText: 'Please your the email you registered with',
			placeholder: 'me@test.com',
			validation: validateEmail,
		},
		{
			name: 'password1',
			type: 'password',
			label: 'Enter your password',
			helperText: 'Enter your password',
			placeholder: '',
			validation: validatePassword,
		},
		{
			name: 'password2',
			type: 'password',
			label: 'Confirm Password',
			helperText: 'Re-enter password',
			placeholder: '',
			validation: validateConfirmPassword,
			isCustomValidation: true,
		},
	],
};
