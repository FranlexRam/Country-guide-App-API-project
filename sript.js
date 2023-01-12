// Links API's
/*
                //FULL NAME
https://restcountries.com/v3.1/name/{name}?fullText=true
                //NAME
https://restcountries.com/v3.1/name/{name}
*/



// SELECTORES
let searchInput = document.getElementById('buscador');
// EVENT LISTENER
searchInput.addEventListener("click", async (e)=>{
    let countryName = searchInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        // console.log(data[0].flag);
        // console.log(data[0].name);
        // console.log(data[0].capital);
        // console.log(data[0].population);
        // console.log(data[0].region);
        
        // let countriesArray = data.slice(0,9);
        // countriesArray.forEach(country => {
        
        result.innerHTML += `
        <img src="${data.flag}" class="flag-img">
        <h2>${data.name}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data.capital}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data.population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Region:</h4>
                <span>${data.region}</span>
            </div>
        </div>
        `;

    })
    .catch(() => {
        if (searchInput.length == 0) {
            result.innerHTML = `<h3>The input field cannot be empty</h3>`
        } else {
            result.innerHTML = `<h3>Please enter a valid country name</h3>`
        }
    })


    // });
});