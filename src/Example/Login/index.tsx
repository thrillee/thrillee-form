import React, { useState } from 'react';
import { Card, Form, Button, Container, CardTitle, CardBody } from 'reactstrap';

import { formData } from './FormData';
import { inputTemplates } from '../../inputGenerators/index';

import { Formlee } from 'formlee';
import Result from '../Result';

const Login = () => {
	const defaultValues = {
		email: 'default@test.com',
		password: '123admin123',
	};

	const [isSubmitted, setSubmit] = useState<boolean>(false);
	const [values, setValues] = useState<{}>();

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
		setValues(values);
	};
	return (
		<Container>
			<Card>
				<CardBody>
					<CardTitle>Login Form (ThrilleeForm Test)</CardTitle>
					<Form onSubmit={handleSubmit}>
						<Formlee
							formData={formData}
							onSubmit={receiveValue}
							isSubmitted={isSubmitted}
							setIsSubmitted={setSubmit}
							defaultValues={defaultValues}
							inputTemplates={inputTemplates}
						/>
						<Button type='submit' color='warning' onClick={handleSubmit}>
							Login
						</Button>
					</Form>

					{values !== undefined && <Result data={values} />}
				</CardBody>
			</Card>
		</Container>
	);
};

export default Login;
