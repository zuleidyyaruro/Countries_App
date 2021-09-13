import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <ContainerHero>
            <HeadingOne>Welcome to my Countries App</HeadingOne>
            <Link to='/search'><Button>Search By Country</Button></Link>
        </ContainerHero>
    )
}

const ContainerHero = styled.section`
    height: 250px;
    background-color: #F5E8C7;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
`;

const HeadingOne = styled.h1`
    font-size: 50px;
    color: #6F4C5B;
`;

const Button = styled.p`
    text-align: center;
    border-radius: 8px;
    padding: 10px;
    background-color: #DEBA9D;
    color: black;
    margin-top: 50px;

    :hover {
        background-color: #6F4C5B;
        color:white;
    }
`;

export default Hero
