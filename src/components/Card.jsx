import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Contenedor = styled.div`
  background-color: #ffffff1f;
  padding: 1rem;
	border-radius: 10px;
	box-shadow: 15px 14px 30px -20px black;
	transition: box-shadow 0.3s ease-in-out;
  width: 400px;
  height: 250px;
  position: relative;
  margin: 1rem;
  justify-content: center;
`
const ContenedorBoton = styled.div`
  display: flex;
  flex-direction: row-reverse;

`

const Boton = styled.button`
  color: black;
  background-color: #ffffff1f;
  border-color: #ffffff1f;
  width: 2rem;
  height: 2rem;
  border-radius: 10%;
  &:hover {
    background-color: red;
  }
`
const Titulo = styled.h3`
padding-bottom: 1rem;
color: white;
`

const Contenedor2 = styled.div` //Contiene max min y img
  display: flex;
  flex-direction: row;
  padding-top: 1.5rem;
  position: relative;
  justify-content: center;
  color: white;
`

const Min = styled.div`
  padding-right: 1.5rem;
  
`

const Max = styled.div`
  padding-right: 2rem;
  padding-left: 1.5rem;

`

const Imagen = styled.div`

`




function Card(props) {
  // acá va tu código
  const {max, min, name, img, onClose, id} = props

  return <Contenedor>
    <ContenedorBoton><Boton onClick={onClose}>X</Boton></ContenedorBoton>
    <Link to={`/city/${id}`} >
      <Titulo>{name}</Titulo>
    </Link>
    <Contenedor2 className='tem-img'>
      <Min>
        <p>Min</p>
        <span>{min}</span>
      </Min>
      <Max>
        <p>Max</p>
        <span>{max}</span>
      </Max>
      
      
      <Imagen><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`clima-${img}`} /></Imagen>
    </Contenedor2>


  </Contenedor>
};


export default Card;