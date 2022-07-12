import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
    background-color: #838383c1;
    padding: 1rem;
	border-radius: 10px;
    border: solid;
    border-color: black;
	box-shadow: 15px 14px 30px -20px black;
	transition: box-shadow 0.3s ease-in-out;
    width: 400px;
    height: 250px;
    position: relative;
    margin: 1rem;
    justify-content: center;
`
const Titulo = styled.h3`
`

const Contenedor2 = styled.div` //Contiene max min y img
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    position: relative;
    justify-content: center;
`

const TextoLorem = styled.p`
    font-size: small;
    color: white;
`






function About() {
return <Contenedor>
<Contenedor2 className='tem-img'>
    <Titulo>Esta es la página del tiempo de Nacho</Titulo>
    <TextoLorem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque cupiditate vel dolor accusamus illum corrupti quod recusandae, impedit quia expedita molestias voluptatibus laudantium optio cum tempora necessitatibus doloremque! Inventore, possimus.</TextoLorem>
    </Contenedor2>
</Contenedor>
};

export default About;