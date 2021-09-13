import React, {useEffect, useState}from 'react';

import ContainerCountry from '../components/Home/ContainerCountry';
import Spinner from '../components/Spinner';
import getCountries from '../services/getCountries';

const Home = () => {

    const [countries, setCountries] = useState([]);
    const [spinner, setSpinner]=useState(false);

    useEffect(() => {
        getCountries().then(data => setCountries(data.slice(30, 80)));
        setTimeout(()=>{
            setSpinner(true)
        }, 3000)
    }, [])
    

    return (
        <>
        {
            spinner===false ? 
                <Spinner/>
                : 
                <ContainerCountry setCountries={setCountries} countries={countries} setSpinner={setSpinner}/>
        }
            
        </>
    )
}

export default Home
