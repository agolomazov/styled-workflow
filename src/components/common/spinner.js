import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
	height: 80px;
	width: 80px;
	border: 8px solid black;
	border-radius: 50%;
	border-top-color: transparent;
	will-change: transform;

	animation: 1s ${rotate360} linear infinite;
`;

export default Spinner;
