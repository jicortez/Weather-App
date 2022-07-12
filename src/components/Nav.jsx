import React from 'react';
import SearchBar from './SearchBar'
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
const ContenedorSearchBar = styled.div`
    padding-bottom: 1rem;
`
const NavbarTitle = styled(Link)`
color:white;
font-size: larger;
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
color:white;
font-size: Medium;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
padding-left: 4rem;
&:hover,
&:focus{
    color: white;
}
&:active{
    color: black;
};
`


function NavBar({onSearch}) {
    return <ContenedorNavBar>
        <ContenedorP>
            <NavbarTitle to= "/" >
                <p>Weather App</p>
            </NavbarTitle>
        </ContenedorP>
        <NavbarAbout to='/about'>
            <span>About</span>
        </NavbarAbout>
        <ContenedorSearchBar>
            <SearchBar onSearch={onSearch}/>
        </ContenedorSearchBar>
    </ContenedorNavBar>
    
}


export default NavBar;