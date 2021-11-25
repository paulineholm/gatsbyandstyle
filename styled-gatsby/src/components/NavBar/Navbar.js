import React from 'react';
import styled from 'styled-components'
import { Logo } from './Logo';
import { Link } from 'gatsby';

const NavMenu = styled.nav`
  color:black;
`;

const Flex = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    text-transform: lowercase;
    padding: 27.5px 20px;
    font-weight: 500;
`;



const Navbar = () => {
    return(
        <NavMenu>
            <Flex>
            <Logo />
            <StyledLink to="/">About</StyledLink>
            <StyledLink to="/about">Articles</StyledLink>
            <StyledLink to="/gallery">Gallery</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            </Flex>
        </NavMenu>
    )
} 

export default Navbar;