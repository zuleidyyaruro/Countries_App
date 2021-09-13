import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CardCountry = ({ country }) => {
    const { name, flag } = country;
    return (
        <Container>
            <h5>{name}</h5>
            <img src={flag} alt={name} width="400" height="250" />
            <Link to={`/country/${name}`}><Button>More Information</Button></Link>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
`;

const Button = styled.p`
  border-radius: 6px;
  padding: 10px;
  border: none;
  background-color: #DEBA9D;
  color:black;
  
  :hover {
    background-color: #6F4C5B;
    color:whitesmoke;
    cursor: pointer;
}
    
`;


export default CardCountry
