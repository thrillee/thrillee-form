import { FormGroup, Label, Input, FormText } from 'reactstrap';

import { InputFieldProps } from '../ThrilleeForm/configs';

export const emailInput = (props: InputFieldProps) => {
	return (
		<FormGroup key={props.fieldData.name + props.key}>
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
	);
};

export const passwordInput = (props: InputFieldProps) => {
	return (
		<FormGroup key={props.fieldData.name + props.key}>
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
	);
};

export const selectInput = (props: InputFieldProps) => {
	return (
		<FormGroup key={props.fieldData.name + props.key}>
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
	);
};

export const textInput = (props: InputFieldProps) => {
	return (
		<FormGroup key={props.fieldData.name + props.key}>
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
	);
};

export const textAreaInput = (props: InputFieldProps) => {
	return (
		<FormGroup key={props.fieldData.name + props.key}>
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
	);
};

export const fileInput = (props: InputFieldProps) => {
	return (
		<FormGroup key={props.fieldData.name + props.key}>
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
	);
};

export const radioInput = (props: InputFieldProps) => {
	return (
		<FormGroup tag='fieldset' key={props.fieldData.name + props.key}>
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
	);
};

export const checkBoxInput = (props: InputFieldProps) => {
	return (
		<FormGroup check key={props.fieldData.name + props.key}>
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
	);
};
