import { Formik, useField } from 'formik';
import * as Yup from 'yup';
import {
	StyledForm,
	Label,
	StyledErr,
	StyledSelect,
	Input,
	Submit,
	Reset,
	CheckboxLabel,
} from './style';
import { useHistory } from 'react-router-dom';

const validationSchema = Yup.object({
	firstname: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Please enter your first name'),
	lastname: Yup.string()
		.max(20, 'Must be 20 characters or less')
		.required('Please enter your last name'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Please enter your email'),
	acceptedTerms: Yup.boolean()
		.required('Required')
		.oneOf([true], 'Must Accept Terms and Conditions'),
	age: Yup.number()
		.required('Please enter your age')
		.min(18, 'You must be at least 18 years')
		.max(60, 'You must be at most 60 years'),
	jobType: Yup.string()
		.oneOf(
			['designer', 'development', 'product', 'other'],
			'Invalid Job Type'
		)
		.required('Please select your job type'),
});

const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Label htmlFor={props.id || props.name}>
				{label}
				<Input
					{...field}
					{...props}
					valid={meta.touched && !meta.error}
					error={meta.touched && meta.error}
				/>
			</Label>

			{meta.touched && meta.error ? (
				<StyledErr>{meta.error}</StyledErr>
			) : null}
		</>
	);
};

const Select = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<Label htmlFor={props.id || props.name}>
				{label}

				<StyledSelect
					{...field}
					{...props}
					valid={meta.touched && !meta.error}
					error={meta.touched && meta.error}
				/>
			</Label>

			{meta.touched && meta.error ? (
				<StyledErr>{meta.error}</StyledErr>
			) : null}
		</>
	);
};

const Checkbox = ({ label, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });
	return (
		<>
			<CheckboxLabel htmlFor={props.id || props.name}>
				<Input type="checkbox" {...field} {...props} />
				{label}
			</CheckboxLabel>
			{meta.touched && meta.error ? (
				<StyledErr>{meta.error}</StyledErr>
			) : null}
		</>
	);
};

const Form = () => {
	const history = useHistory();

	return (
		<Formik
			initialValues={{
				firstname: '',
				lastname: '',
				email: '',
				acceptedTerms: false,
				subscribe: false,
				age: 0,
				jobType: '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);

				const timeOut = setTimeout(() => {
					setSubmitting(false);
					history.push('/welcome');

					clearTimeout(timeOut);
				}, 1000);
			}}
		>
			<StyledForm>
				<TextInput
					label="First Name"
					type="text"
					placeholder="John"
					name="firstname"
				/>
				<TextInput
					label="Last Name"
					type="text"
					placeholder="Doe"
					name="lastname"
				/>
				<TextInput label="Your Age" type="number" name="age" />
				<TextInput
					label="Your Email"
					type="email"
					name="email"
					placeholder="example@mail.com"
				/>
				<Select name="jobType" label="Job Type">
					<option value="">Select a job type</option>
					<option value="designer">Designer</option>
					<option value="development">Developer</option>
					<option value="product">Product Manager</option>
					<option value="other">Other</option>
				</Select>
				<Checkbox
					label="I accept the terms and conditions"
					name="acceptedTerms"
				/>
				<Checkbox
					label="I want to receive newsletter and email"
					name="subscribe"
				/>

				<Submit type="submit">Submit</Submit>
				<Reset type="reset">Reset</Reset>
			</StyledForm>
		</Formik>
	);
};

export default Form;
