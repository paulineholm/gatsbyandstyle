import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import Navbar from '../components/NavBar/Navbar';


const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: black;
    font-family: 'Montserrat';
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.light};
  position: relative;
`;

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
      <Navbar />
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;