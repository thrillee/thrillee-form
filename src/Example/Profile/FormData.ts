import { required, validateEmail } from '../../ThrilleeForm/validators';

export const formData = {
	fields: [
		{
			name: 'firstname',
			type: 'text',
			label: 'Firstname',
			helperText: 'Your firstname',
			placeholder: '',
			validation: required,
		},
		{
			name: 'lastname',
			type: 'text',
			label: 'Lastname',
			helperText: 'Your lastname',
			placeholder: 'me@test.com',
			validation: required,
		},
		{
			name: 'email',
			type: 'email',
			label: 'Your email',
			helperText: 'Please your the email you registered with',
			placeholder: 'me@test.com',
			validation: validateEmail,
		},
		{
			name: 'programmingLove',
			type: 'select',
			label: 'How much do you love programming',
			helperText: 'Rate out of scale 1 to 10',
			placeholder: '',
			validation: required,
			options: [
				{ value: '1', label: '1' },
				{ value: '2', label: '2' },
				{ value: '3', label: '3' },
				{ value: '4', label: '4' },
				{ value: '5', label: '5' },
				{ value: '6', label: '6' },
				{ value: '7', label: '7' },
				{ value: '8', label: '8' },
				{ value: '9', label: '9' },
				{ value: '10', label: '10' },
			],
		},
		{
			name: 'aboutMe',
			type: 'textArea',
			label: 'About me',
			helperText: 'Write a little something about yourself',
			placeholder: '',
		},
		{
			name: 'gender',
			type: 'radioInput',
			label: 'Gender',
			helperText: '',
			placeholder: '',
			validation: required,
			options: [
				{ value: 'Male', label: 'Male' },
				{ value: 'Female', label: 'Female' },
			],
		},
		{
			name: 'receiveNotification',
			type: 'checkbox',
			label: 'I want to be receiving notifications',
			helperText: '',
			placeholder: '',
		},
	],
};
