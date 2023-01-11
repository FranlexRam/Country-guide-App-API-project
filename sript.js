// API's
const API_PAISES = 'https://restcountries.com/';
const API_CLIMA = 'https://openweathermap.org/current';


// SELECTORES
const buscador = document.querySelector("#buscador");

fetch(`${API_PAISES}/users`)
    .then((response) => response.json())
    .then((users) =>{
        const tpl = users.map(user => `<li></li>`)
    });

    const data = JSON.parse(this.response);
    console.log(data);