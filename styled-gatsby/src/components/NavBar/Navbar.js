import React from 'react';
import styled from 'styled-components'
import { Logo } from './Logo';
import { Link } from 'gatsby';

const NavMenu = styled.nav`
  color:red;
`;

const Flex = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
`





const Navbar = () => {
    return(
        <NavMenu>
            <Flex>
            <Logo />
            <Link to="/">About</Link>
            <Link to="/about">Articles</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            </Flex>
        </NavMenu>
    )
} 

export default Navbar;