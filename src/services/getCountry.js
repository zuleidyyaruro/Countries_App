

const getCountry=(name)=>{

    const url=`https://restcountries.eu/rest/v2/name/${name}`;
    return fetch(url).then(response=>response.json());
}

export default getCountry;