import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContenedorNavBar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    position: relative;
    background-color: #464646;
    justify-content: space-between;
    color: white;
`

const ContenedorP = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    padding-top: 1rem;
    padding-left: 1rem;
    font-size: larger;
`
const NavbarTitle = styled(Link)`
color:white;
font-size: small;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 0px;
padding-left: 2rem;
&:hover,
&:focus{
    color: white;
}
&:active{
    color: black;
};
`

const NavbarAbout = styled(Link)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    color:white;
    font-size: small;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    padding-right: 3rem;
    &:hover,
    &:focus{
        color: white;
    }
    &:active{
        color: black;
    };
`


function FooterBar({onSearch}) {
    return <ContenedorNavBar>
        <ContenedorP>
            <NavbarTitle>
                <p>Creada por Juan Ignacio Cortez</p>
            </NavbarTitle>
        </ContenedorP>
        <NavbarAbout>
            <a href="https://www.linkedin.com/in/juancortez-dev/">LinkedIn</a>
            <a href="https://github.com/jicortez">Github</a>        
        </NavbarAbout>
    </ContenedorNavBar>
    
}


export default FooterBar;