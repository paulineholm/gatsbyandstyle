import styled from 'styled-components';

const H1 = styled.h1`
  font-size:  ${({front}) => front ? '75px' : '52px'};
  color: ${({theme}) => theme.colors.warmyellow};
  font-weight: ${({theme}) => theme.font.bold};
  letter-spacing: 1px;
  max-width: 80%;
  text-align: ${({front}) => front ? 'end' : 'start'};
  text-transform: ${({front}) => front ? 'capitalize' : 'lowercase'};
  margin: 0px;
  padding: 0px;
  text-shadow: 1.5px 1.5px ${({theme}) => theme.colors.warmbeetroot};
`;

export default H1;