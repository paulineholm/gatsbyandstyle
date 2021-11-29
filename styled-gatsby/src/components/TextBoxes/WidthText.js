import styled from 'styled-components';

const WidthText = styled.p`
  font-size:  18px;
  color: ${({theme}) => theme.colors.dark};
  font-weight: ${({theme}) => theme.font.regular};
  text-align: ${({front}) => front ? 'end' : 'start'};
  width: 50%;
  padding: ${({front}) => front ? '10px 0px' : '0px'};
  line-height: 1.5;
`;

export default WidthText;