import React from 'react';
import styled from 'styled-components'
import { Logo } from './Logo';
import { Link } from 'gatsby';

const NavMenu = styled.nav`
    color: black;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: white;
`;


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
            <Logo />
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/articles">Articles</StyledLink>
            <StyledLink to="/gallery">Gallery</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
        </NavMenu>
    )
} 

export default Navbar;