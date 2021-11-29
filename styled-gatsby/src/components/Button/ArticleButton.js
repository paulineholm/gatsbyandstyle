import styled from 'styled-components'

const ArticleButton = styled.button`
  position: absolute;
  bottom: 50px;
  left: 0;
  border: 2px ${({theme}) => theme.colors.brightblue} solid;
  color: ${({theme}) => theme.colors.brightblue};
  background-color: rgba(0,0,0, 0.6);
  font-size: 19px;
  font-weight: 600;
  line-height: 19px;
  padding: 15px 50px 15px 25px;
`;

export default ArticleButton;