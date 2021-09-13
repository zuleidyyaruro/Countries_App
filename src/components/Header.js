import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <ContainerNav>
                <Link to='/' component={Logo}>Countries App</Link>
            </ContainerNav>
        </Container>
    )
}

const ContainerNav = styled.nav`
    width: 95%;
    padding: 15px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 20px;
`;

const Container = styled.div`
    background-color: #6F4C5B;
`;

const Logo = styled.a`
    color: whitesmoke;
`;


export default Header
