import styled from '@emotion/styled';
import CardCountry from '../CardCountry';

const ContainerCountry = ({setCountries, countries, setSpinner}) => {

    return (
        <Container>
            {
                countries.map((country) => {
                    return <CardCountry key={country.name} country={country} />
                })
            }
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default ContainerCountry
