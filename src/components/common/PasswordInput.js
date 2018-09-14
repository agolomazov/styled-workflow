import styled from 'styled-components';

const PasswordInput = styled.input.attrs({
	type: props => (props.showPassword ? 'text' : 'password'),
})`
	border-radius: 3px;
	outline: none;
	border: 1px solid;
	border-color: black;
	&:focus {
		border-color: blue;
	}
`;

export default PasswordInput;
