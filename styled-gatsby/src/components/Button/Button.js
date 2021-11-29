import styled from 'styled-components'

const Button = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: lowercase;
  height: 40px;
  border: 2px solid ${({theme}) => theme.colors.brightblue};
  color: ${({theme}) => theme.colors.brightblue};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 10px 0;
  transition: box-shadow .3s ease;
  
  :hover {
    box-shadow: 0 10px 30px -15px ${({theme}) => theme.colors.warmbeetroot};
  }
`;

export default Button;