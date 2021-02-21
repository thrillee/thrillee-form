import { required, validatePhone } from '../../ThrilleeForm/validators';

export const formData = {
	fields: [
		{
			name: 'packageType',
			type: 'selectGrid',
			label: 'Select DSTV Package',
			helperText: '',
			placeholder: '',
			validation: required,
			options: [
				{ value: 'Premium', label: 'DSTV Premium' },
				{ value: 'Classic', label: 'DSTV OG Classic' },
			],
			grid: {
				xs: '12',
			},
		},
		{
			name: 'customerAccountnumber',
			type: 'textGrid',
			label: 'Enter your DSTV account number',
			helperText: '',
			placeholder: '',
			validation: required,
			grid: {
				xs: '12',
				md: '6',
			},
			dependent: { fieldName: 'packageType', value: 'Classic' },
		},
		{
			name: 'customerName',
			type: 'textGrid',
			label: 'Enter your fullname',
			helperText: '',
			placeholder: '',
			validation: required,
			grid: {
				xs: '12',
				md: '6',
			},
			dependent: { fieldName: 'packageType', value: 'Classic' },
		},
		{
			name: 'customerRef',
			type: 'textGrid',
			label: 'Enter your phonenumber',
			helperText: '',
			placeholder: '',
			validation: validatePhone,
			dependent: { fieldName: 'packageType', value: 'Premium' },
			grid: {
				xs: '12',
			},
		},
		{
			name: 'amount',
			type: 'textGrid',
			label: 'Price',
			helperText: '',
			placeholder: '',
			defaultValue: '10,000',
			notEditable: true,
			dependent: { fieldName: 'packageType', value: 'Premium' },
			grid: {
				xs: '12',
			},
		},
		{
			name: 'amount',
			type: 'textGrid',
			label: 'Price',
			helperText: '',
			placeholder: '',
			defaultValue: '5,000',
			notEditable: true,
			dependent: { fieldName: 'packageType', value: 'Classic' },
			grid: {
				xs: '12',
			},
		},
	],
};
