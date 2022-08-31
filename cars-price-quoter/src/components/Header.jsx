//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports


import React from 'react'
import styled from '@emotion/styled'


//////////////////////////////////////////////////////////////////////////////////////////////
/// Components


const HeaderContainer = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;


const Header = ({title}) => {
    return ( 
        <HeaderContainer>
            <TextHeader>{title}</TextHeader>
        </HeaderContainer>
     );
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exports

 
export default Header;