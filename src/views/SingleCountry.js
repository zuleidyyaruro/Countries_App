import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import getCountry from '../services/getCountry';
import React, { useEffect, useState } from 'react';

const SingleCountry = () => {

    const { name } = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        getCountry(name)
            .then(data => setCountry(data))
    }, [name]);

    return (
        <div>
            {
                country.map(element => {
                    return (
                        <Container className="container" key={element.name}>

                            <div className="row">
                                <div className="col-lg-7 col-sm-12 col-md-12 ">
                                    <img src={element.flag} alt="" />
                                </div>
                                <ContainerInformation className="col-lg-5 col-sm-12 col-md-12 ">
                                    <HeadingFour>{element.name}</HeadingFour>
                                    <Parrafo><strong>Capital: </strong> {element.capital}</Parrafo>
                                    <Parrafo><strong>Region:</strong> {element.region}</Parrafo>
                                    <Parrafo><strong>Subregion:</strong> {element.subregion}</Parrafo>
                                    <Parrafo><strong>Total Population:</strong> {element.population}</Parrafo>
                                    <Parrafo><strong>Demonym:</strong> {element.demonym}</Parrafo>
                                    <Parrafo><strong>Total Area:</strong> {element.area} km²</Parrafo>
                                    <Parrafo><strong>Language:</strong> {element.languages[0].name}</Parrafo>
                                </ContainerInformation>
                            </div>
                        </Container>
                    )
                })
            }
        </div>
    )
}

const Container = styled.div`
    margin-top: 20px;
    padding: 20px;

    img {
        width: 220px;
        @media (min-width: 768px){
            width: 700px;
        }
    }
`;

const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Parrafo = styled.p`
    margin: 10px;
    font-size: 23px;
    color: #6F4C5B;
`;

const HeadingFour = styled.h4`
    color: #6F4C5B;
`;

export default SingleCountry
