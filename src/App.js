import React, { useState } from 'react';
import {Route} from 'react-router-dom';

//CSS
import './App.css';
import styled from 'styled-components';

//Componentes
import NavBar from './components/Nav.jsx';
import Cards from "./components/Cards.jsx"
import About from './components/About.jsx';
import City from './components/Ciudad.jsx';
import FooterBar from './components/Footer.jsx';

const ContenedorTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: linear-gradient(to bottom, #232526, #414345); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 100vh;
  @media (min-width: 900px) {
    height: 100%;
}
  @media (min-width: 1920px) {
    height: 100vh;
}
`

const ContenedorCards = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  min-height: 78vh;


`
const ContenedorCity = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`

const ContenedorFooter = styled.div`
padding-top: 6rem;
@media (max-width: 800px) {
  padding-top: 0rem;
}
`


export default function App() {
  const [cities, setCities] = useState([]);

  const apiKey ="4ae2636d8dfbdc3044bede63951a019b";

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(response_json => {
      if(response_json.main !== undefined){
        const city = {
          min: Math.round(response_json.main.temp_min),
          max: Math.round(response_json.main.temp_max),
          id:response_json.id,
          img: response_json.weather[0].icon,
          wind: response_json.wind.speed,
          temp: response_json.main.temp,
          name: response_json.name,
          longitude: response_json.coord.lon,
          latitude: response_json.coord.lat
        }
        setCities(oldCities => [...oldCities, city]);
        console.log(city);
      } else {
        alert("Ciudad no encontrada!");
      }
    })
    .catch(e => console.log(e));
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if(ciudad.length > 0){
      return ciudad[0];
    } else{
      return null;
    }
    
  }

  return (
    <ContenedorTotal>
    <Route path="/" render={() => <NavBar onSearch={onSearch}/>} />
    <Route exact path="/" render={() => <ContenedorCards> <Cards cities ={cities} onClose={onClose}/></ContenedorCards>} />
    <Route exact path="/about" render={() => <ContenedorCity><About/></ContenedorCity>} />
    <Route exact path="/city/:cityId" render={({match}) => <ContenedorCity><City city={onFilter(match.params.cityId)}/></ContenedorCity>} />
    <Route path="/" render={() => <ContenedorFooter><FooterBar/></ContenedorFooter>} />
    </ContenedorTotal>
  );
}
