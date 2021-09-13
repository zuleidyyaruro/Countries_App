import React from 'react';
import styled from '@emotion/styled';

const Spinner = () => {
    return (
        <Container>
            <div className="lds-hourglass">

            </div>
        </Container>

    )
}

const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    margin: auto;

`;

export default Spinner
