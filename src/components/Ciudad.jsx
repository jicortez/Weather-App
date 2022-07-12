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
    position: absolute;
    margin: 1rem;

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






function City({city}) {
    if(!city) {
        alert("La ciudad no existe")
        return <div>La ciudad no existe </div>};



return <Contenedor>
<Contenedor2 className='tem-img'>
    <Titulo>{city.name}</Titulo>
    <div>
                        <div>Temperatura: {city.temp}ºC</div>
                        <div>Clima: {city.max}ºC</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitude}º</div>
                        <div>Longitud: {city.longitude}º</div>
    </div>
    </Contenedor2>
</Contenedor>
};

export default City;