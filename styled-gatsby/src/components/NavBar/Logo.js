import React from 'react';
import styled from 'styled-components';

const SiteLogo = styled.p`
    color: ${({theme}) => theme.colors.brightblue};;
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 1px;
    font-size: 32px;
    font-weight: bold;
    padding: 0 10px;
    margin: 20px;
`;

export const Logo = () => {
    return <SiteLogo>Tefer</SiteLogo>;
  };