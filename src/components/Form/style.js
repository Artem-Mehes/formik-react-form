import styled, { css, keyframes } from 'styled-components';
import { Form } from 'formik';
import { shake } from 'react-animations';

const shakeAnimation = keyframes`${shake}`;

export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	width: 600px;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	font-weight: 600;
	margin-bottom: 1rem;
`;

export const CheckboxLabel = styled(Label)`
	flex-direction: row;
	align-items: center;
    font-weight: 400;
`;

export const StyledErr = styled.div`
	color: #b11111;
	margin-bottom: 1rem;
	background-color: #f4c9c9;
	padding: 0.3rem;
	animation: 0.7s ${shakeAnimation};
`;

export const Input = styled.input`
	border: 2px solid #dedddd;
	margin-top: 0.3rem;
	padding: 0.7rem 0.5rem;

	&:focus {
		outline: none;
		border-color: #3672d0;
	}

	${({ valid }) =>
		valid &&
		css`
			border-color: #0e970e;

			&:focus {
				border-color: #0e970e;
			}
		`}

	${({ error }) =>
		error &&
		css`
			border-color: #b11111;
			animation: 0.7s ${shakeAnimation};

			&:focus {
				border-color: #b11111;
			}
		`}
`;

export const StyledSelect = Input.withComponent('select');

export const Submit = styled.button`
	background-color: #3672d0;
	border: none;
	padding: 0.8rem;
	color: #fff;
	font-size: 1rem;
	cursor: pointer;
	margin: 1rem auto 0.7rem;
	width: 50%;

	&:hover {
		background-color: #628dd1;
	}
`;

export const Reset = styled(Submit)`
	background-color: #8e8686;
	margin-top: 0;

	&:hover {
		background-color: #a9a6a6;
	}
`;
