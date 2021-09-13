import styled from '@emotion/styled';
import getCountry from '../services/getCountry';
import React, { useEffect, useState } from 'react';
import CardCountry from '../components/CardCountry';
import Form from '../components/SearchCountry.js/Form';
import Error from "../components/Error";

const SearchCountry = () => {

    const [querySearch, setQuerySearh] = useState("Germany");
    const [dataCountry, setDataCountry] = useState([]);
    const [fetchError, setFetchError] = useState("");


    useEffect(() => {
        try {
            getCountry(querySearch)
                .then(data => setDataCountry(data))

        } catch (fetchError) {
            console.log(fetchError);
        }

    }, [querySearch]);

    return (
        <>
            <Form setQuerySearh={setQuerySearh} setFetchError={setFetchError} />
            {
                fetchError ? <Error mensaje="Type a Country"/> : null
            }

            <Container>
                {
                    dataCountry.length >= 0 ?
                        (dataCountry.map(element => {
                            return <CardCountry key={element.name} country={element} />
                        }))
                        :
                        <Error mensaje="The Country doesn't Exist"/>
                }
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default SearchCountry
