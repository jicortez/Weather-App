import React from 'react';
import styled from 'styled-components';

const ContenedorBarraDeBusqueda = styled.form`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 1rem;
  padding-right: 1rem;
  text-align: center;
`
const EstilosInput = styled.input`
   margin: 0 5px; /* Centramos el formulario */
   width: 200px;   /* Sin ancho no podemos centrar el formulario */
   background-color: #ffffff; /* Color blanco para el formulario */
   padding: 2px; /* separamos los bordes del form del resto de elementos */
   border-radius: 10px; /* Redondeamos los bordes del form */
`
const EstilosBoton = styled.input`
  border: 1px;
  border-radius: 10%;
  padding: 0.3rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  background-color: #f561179e;
  border-color: #ffffff;
  &:hover {
    background-color: #f56117;
  }
`


function SearchBar({onSearch}) {
  const [city, setCity] = React.useState("")
  return  (
    <ContenedorBarraDeBusqueda onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <EstilosBoton type="submit" value="Agregar" />
      <EstilosInput
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
    </ContenedorBarraDeBusqueda>
  );
};

export default SearchBar;