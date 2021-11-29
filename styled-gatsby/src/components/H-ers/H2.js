import styled from 'styled-components';

const H2 = styled.h2`
  font-size:  25px;
  color: ${({theme}) => theme.colors.brightblue};
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
  padding: 25px 0px 10px 0px;
`;

export default H2;