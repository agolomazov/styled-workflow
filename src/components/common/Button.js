import styled, { css } from 'styled-components';

const Button = styled.button`
	background: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.primaryColor};
	border: 5px solid #000;
	padding: 10px;
	cursor: pointer;
	font-size: 20px;
	border-radius: 20px;
	transition: all 0.25s ease-out;
	outline: none;

	&:hover {
		background: ${props => props.theme.primaryColor};
		color: ${props => props.theme.backgroundColor};
	}

	${props =>
		props.primary &&
		css`
			background: blue;
			color: white;
		`};
`;

export default Button;
