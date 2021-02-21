import React, { useState } from 'react';
import { Card, Form, Button, Container, CardTitle, CardBody } from 'reactstrap';

import { formData } from './FormData';
import { inputTemplates } from '../../inputGenerators/index';

import ThrilleeForm from '../../ThrilleeForm';

const Profile = () => {
	const defaultValues = {
		receiveNotification: true,
		programmingLove: '10',
		aboutMe: '',
		lastname: '',
		email: '',
		firstname: '',
		gender: 'Female',
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
					<CardTitle>Profile (ThrilleeForm Test)</CardTitle>
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
							Update profile
						</Button>
					</Form>
				</CardBody>
			</Card>
		</Container>
	);
};

export default Profile;
