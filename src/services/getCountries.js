
const getCountries = () => {

    const url = 'https://restcountries.eu/rest/v2/all'
    return fetch(url).then(response => response.json());

}

export default getCountries;