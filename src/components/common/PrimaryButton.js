import styled from 'styled-components';
import { Button } from 'reactstrap';

const PrimaryButton = styled(Button).attrs({
	color: 'primary',
})`
	&:hover {
		color: black;
	}
`;

export default PrimaryButton;
