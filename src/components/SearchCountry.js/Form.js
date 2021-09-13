import { useState } from 'react';
import styled from '@emotion/styled';


const Form = ({ setQuerySearh, setFetchError}) => {

    const [countrySearch, setCounstrySearch] = useState("");

    const handleCountrySearch = (e) => {
        setCounstrySearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(countrySearch.trim()===''){
            setFetchError(true);
            setCounstrySearch("");
            return;
        }else{
            setFetchError(false);
            setQuerySearh(countrySearch); 
        }
    };



    return (
        <ContainerForm onSubmit={handleSubmit}>
            <ContainerInput
                onChange={handleCountrySearch}
                type="text"
                value={countrySearch}
                placeholder="Type a Country"
            />
            <Button onClick={handleSubmit}>Search</Button>
        </ContainerForm>
    )
}

const ContainerForm = styled.form`
    width: 80%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-right: 10px;
    background-color: #DEBA9D;
    border: none;
    border-radius: 5px;

    @media (min-width: 768px){
        width: 30%;
    }
`;

const Button = styled.a`
    background-color: #6F4C5B;
    color:whitesmoke;
    border: none;
    border-radius: 5px;
    padding: 8px;

    :hover {
        cursor: pointer;
        background-color: #DEBA9D;
        color:black;
    }
`;

export default Form