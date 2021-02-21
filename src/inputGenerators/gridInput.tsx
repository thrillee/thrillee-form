import { Col, FormGroup, Label, Input, FormText } from 'reactstrap';

import { InputFieldProps } from '../ThrilleeForm/configs';

export const emailInputGrid = (props: InputFieldProps) => {
	return (
		<Col
			xs={props.fieldData.grid?.xs}
			sm={props.fieldData.grid?.sm}
			md={props.fieldData.grid?.md}
			lg={props.fieldData.grid?.lg}
			xl={props.fieldData.grid?.xl}
			key={props.fieldData.name + props.key}
		>
			<FormGroup>
				<Label for={props.fieldData.name}>{props.fieldData.label}</Label>
				<Input
					type='email'
					value={props.value}
					onChange={props.onChange}
					id={props.fieldData.name}
					name={props.fieldData.name}
					disabled={props.fieldData.notEditable}
					placeholder={props.fieldData.placeholder}
				/>
				{props.error ? (
					<FormText color='danger'>{props.error}</FormText>
				) : (
					<FormText color='muted'>{props.fieldData.helperText}</FormText>
				)}
			</FormGroup>
		</Col>
	);
};

export const passwordInputGrid = (props: InputFieldProps) => {
	return (
		<Col
			xs={props.fieldData.grid?.xs}
			sm={props.fieldData.grid?.sm}
			md={props.fieldData.grid?.md}
			lg={props.fieldData.grid?.lg}
			xl={props.fieldData.grid?.xl}
			key={props.fieldData.name + props.key}
		>
			<FormGroup>
				<Label for={props.fieldData.name}>{props.fieldData.label}</Label>
				<Input
					type='password'
					value={props.value}
					onChange={props.onChange}
					id={props.fieldData.name}
					name={props.fieldData.name}
					disabled={props.fieldData.notEditable}
					placeholder={props.fieldData.placeholder}
				/>
				{props.error ? (
					<FormText color='danger'>{props.error}</FormText>
				) : (
					<FormText color='muted'>{props.fieldData.helperText}</FormText>
				)}
			</FormGroup>
		</Col>
	);
};

export const selectInputGrid = (props: InputFieldProps) => {
	return (
		<Col
			xs={props.fieldData.grid?.xs}
			sm={props.fieldData.grid?.sm}
			md={props.fieldData.grid?.md}
			lg={props.fieldData.grid?.lg}
			xl={props.fieldData.grid?.xl}
			key={props.fieldData.name + props.key}
		>
			<FormGroup>
				<Label for={props.fieldData.name}>{props.fieldData.label}</Label>
				<Input
					type='select'
					value={props.value}
					onChange={props.onChange}
					id={props.fieldData.name}
					name={props.fieldData.name}
					disabled={props.fieldData.notEditable}
				>
					{props.fieldData.options?.map((option, key) => (
						<option value={option.value} key={key}>
							{option.value}
						</option>
					))}
				</Input>
				{props.error ? (
					<FormText color='danger'>{props.error}</FormText>
				) : (
					<FormText color='muted'>{props.fieldData.helperText}</FormText>
				)}
			</FormGroup>
		</Col>
	);
};

export const textInputGrid = (props: InputFieldProps) => {
	return (
		<Col
			xs={props.fieldData.grid?.xs}
			sm={props.fieldData.grid?.sm}
			md={props.fieldData.grid?.md}
			lg={props.fieldData.grid?.lg}
			xl={props.fieldData.grid?.xl}
			key={props.fieldData.name + props.key}
		>
			<FormGroup>
				<Label for={props.fieldData.name}>{props.fieldData.label}</Label>
				<Input
					type='text'
					value={props.value}
					onChange={props.onChange}
					id={props.fieldData.name}
					name={props.fieldData.name}
					disabled={props.fieldData.notEditable}
					placeholder={props.fieldData.placeholder}
				/>
				{props.error ? (
					<FormText color='danger'>{props.error}</FormText>
				) : (
					<FormText color='muted'>{props.fieldData.helperText}</FormText>
				)}
			</FormGroup>
		</Col>
	);
};

export const textAreaInputGrid = (props: InputFieldProps) => {
	return (
		<Col
			xs={props.fieldData.grid?.xs}
			sm={props.fieldData.grid?.sm}
			md={props.fieldData.grid?.md}
			lg={props.fieldData.grid?.lg}
			xl={props.fieldData.grid?.xl}
			key={props.fieldData.name + props.key}
		>
			<FormGroup>
				<Label for={props.fieldData.name}>{props.fieldData.label}</Label>
				<Input
					type='textarea'
					value={props.value}
					onChange={props.onChange}
					id={props.fieldData.name}
					name={props.fieldData.name}
					disabled={props.fieldData.notEditable}
				/>
				{props.error ? (
					<FormText color='danger'>{props.error}</FormText>
				) : (
					<FormText color='muted'>{props.fieldData.helperText}</FormText>
				)}
			</FormGroup>
		</Col>
	);
};

export const fileInputGrid = (props: InputFieldProps) => {
	return (
		<Col
			xs={props.fieldData.grid?.xs}
			sm={props.fieldData.grid?.sm}
			md={props.fieldData.grid?.md}
			lg={props.fieldData.grid?.lg}
			xl={props.fieldData.grid?.xl}
			key={props.fieldData.name + props.key}
		>
			<FormGroup>
				<Label for={props.fieldData.name}>{props.fieldData.label}</Label>
				<Input
					type='file'
					value={props.value}
					id={props.fieldData.name}
					onChange={props.onChange}
					name={props.fieldData.name}
					disabled={props.fieldData.notEditable}
				/>
				{props.error ? (
					<FormText color='danger'>{props.error}</FormText>
				) : (
					<FormText color='muted'>{props.fieldData.helperText}</FormText>
				)}
			</FormGroup>
		</Col>
	);
};

export const radioInputGrid = (props: InputFieldProps) => {
	return (
		<Col
			xs={props.fieldData.grid?.xs}
			sm={props.fieldData.grid?.sm}
			md={props.fieldData.grid?.md}
			lg={props.fieldData.grid?.lg}
			xl={props.fieldData.grid?.xl}
			tag='fieldset'
			key={props.fieldData.name + props.key}
		>
			<FormGroup>
				<legend>{props.fieldData.label}</legend>
				{props.fieldData.options?.map((option, key) => (
					<FormGroup key={key} check>
						<Label check>
							<Input
								type='radio'
								value={option.value}
								onChange={props.onChange}
								name={props.fieldData.name}
								disabled={props.fieldData.notEditable}
								checked={option.value === props.value}
							/>{' '}
							{option.label}
						</Label>
					</FormGroup>
				))}
				{props.error ? (
					<FormText color='danger'>{props.error}</FormText>
				) : (
					<FormText color='muted'>{props.fieldData.helperText}</FormText>
				)}
			</FormGroup>
		</Col>
	);
};

export const checkBoxInputGrid = (props: InputFieldProps) => {
	return (
		<Col
			xs={props.fieldData.grid?.xs}
			sm={props.fieldData.grid?.sm}
			md={props.fieldData.grid?.md}
			lg={props.fieldData.grid?.lg}
			xl={props.fieldData.grid?.xl}
			check
			key={props.fieldData.name + props.key}
		>
			<FormGroup>
				<Label for={props.fieldData.name} check>
					<Input
						type='checkbox'
						value={props.value}
						checked={props.value}
						onChange={props.onChange}
						name={props.fieldData.name}
						disabled={props.fieldData.notEditable}
					/>{' '}
					{props.fieldData.label}
				</Label>

				{props.error ? (
					<FormText color='danger'>{props.error}</FormText>
				) : (
					<FormText color='muted'>{props.fieldData.helperText}</FormText>
				)}
			</FormGroup>
		</Col>
	);
};
