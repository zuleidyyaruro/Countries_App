import React from 'react';
import styled from '@emotion/styled';

const Error = ({mensaje}) => {
    return (
        <ContainerError>
            <h4>Error</h4>
            <Message>{mensaje}</Message>
        </ContainerError>
    )
}

const ContainerError=styled.div`
    width: 30%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #dc3545;
    color: whitesmoke;
`;

const Message=styled.p`
    font-size: 20px;
`;



export default Error;
