import styled from 'styled-components';

const H1 = styled.h1`
  font-size:  ${({front}) => front ? '75px' : '52px'};
  color: #F2B263;
  font-weight: 600;
  letter-spacing: 1px;
  max-width: 80%;
  text-align: ${({front}) => front ? 'end' : 'start'};
  text-transform: ${({front}) => front ? 'capitalize' : 'lowercase'};
  margin: 0px;
  padding: 0px;
  text-shadow: 1.5px 1.5px #b00007;
`;

export default H1;