import React from 'react';
import Card from './Card';
import styled, { keyframes } from "styled-components";



const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 20px;
  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
}
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
}
@media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 4rem;
}
`





export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <GridCards>
        {cities.map(c => <Card
          id = {c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          key = {c.id}
        />
        )}
      </GridCards>
    );
  } else {
    return(
      <div>Sin Ciudades</div>
    )
  }
};