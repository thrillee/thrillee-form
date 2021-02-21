import React, { useState } from 'react';
import {
	Row,
	Form,
	Card,
	Button,
	Container,
	CardTitle,
	CardBody,
} from 'reactstrap';

import { formData } from './FormData';
import { inputTemplates } from '../../inputGenerators/index';

import ThrilleeForm from '../../ThrilleeForm';

const DSTV: React.FC = () => {
	const defaultValues = {
		customerAccountnumber: '',
		customerName: '',
		packageType: '',
		customerRef: '',
		amount: '',
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
					<CardTitle> DSTV Subscription Form(ThrilleeForm Test)</CardTitle>
					<Form onSubmit={handleSubmit}>
						<Row>
							<ThrilleeForm
								formData={formData}
								onSubmit={receiveValue}
								isSubmitted={isSubmitted}
								setIsSubmitted={setSubmit}
								defaultValues={defaultValues}
								inputTemplates={inputTemplates}
							/>
						</Row>
						<Button color='primary' type='submit' onClick={handleSubmit}>
							Pay DSTV
						</Button>
					</Form>
				</CardBody>
			</Card>
		</Container>
	);
};

export default DSTV;
