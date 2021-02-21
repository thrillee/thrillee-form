import React, { useState } from 'react';
import { Card, Form, Button, Container, CardTitle, CardBody } from 'reactstrap';

import { formData } from './FormData';
import { inputTemplates } from '../../inputGenerators/index';

import ThrilleeForm from '../../ThrilleeForm';

const Register = () => {
	const defaultValues = {
		email: '',
		password1: '',
		password2: '',
	};

	const [isSubmitted, setSubmit] = useState<Boolean>(false);

	const handleSubmit = (
		e:
			| React.FormEvent<HTMLFormElement>
			| React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setSubmit(true);
	};

	const receiveValue = (values: object) => {
		console.log(values);
	};

	return (
		<Container>
			<Card>
				<CardBody>
					<CardTitle>Register (ThrilleeForm Test)</CardTitle>
					<Form onSubmit={handleSubmit}>
						<ThrilleeForm
							formData={formData}
							onSubmit={receiveValue}
							isSubmitted={isSubmitted}
							setIsSubmitted={setSubmit}
							defaultValues={defaultValues}
							inputTemplates={inputTemplates}
						/>
						<Button type='submit' color='warning' onClick={handleSubmit}>
							Create Account
						</Button>
					</Form>
				</CardBody>
			</Card>
		</Container>
	);
};

export default Register;
