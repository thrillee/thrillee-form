import { validatePassword } from '../../ThrilleeForm/validators';
import { Value } from '../../ThrilleeForm/configs';

export const validateConfirmPassword = (values: Value) => {
	let password1 = values['password1'];
	let password2 = values['password2'];

	let result = validatePassword(password2);

	if (result === undefined && password1 !== password2) {
		result = 'Password does not match';
	}

	return result;
};
