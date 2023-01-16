const WEATHER_API_KEY = 'ea3e909bea13b9ee23b45658c6702774'

const result = document.getElementById('result')


const renderCountryData = data => {
    let elementos = ''

    if (data.length > 10) {
        elementos = `<h1 id="resultError">Too many countries to display<h1>`
    }

    if(!data.length){
        elementos='<h1 id="resultError">No data found<h1>'
    }
    
    if (data.length <= 10) {
        data.forEach(item => {
            console.log(item);
            elementos += `
            <img src="${item?.flags.svg}" class="flag-img" />
            <h2>${item?.name?.common}</h2>
           ${data.length === 1 &&
                `<div class="wrapper">
                    <div class="data-wrapper">
                        <h4><b>Capital:</b></h4>
                        <span>${item?.capital}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4><b>Population:</b></h4>
                        <span>${item?.population}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4><b>Region:</b></h4>
                        <span>${item?.region}</span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4><b>Temperature:</b></h4>
                        <span>${item?.main?.temp}<span> F</span></span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" class="weather-img" />
                        <h4><b>Current weather:</b></h4>
                        <span>${item?.weather[0]?.description}</span>
                    </div>
                </div>
                `
                }
            `
        });
    }
    result.innerHTML = elementos
}

const searchCountry = async(countryValue) => {

       try {

        if(!countryValue.length) return []

        const response = await fetch(`https://restcountries.com/v3.1/name/${countryValue}`)
        const countriesList = await response.json()
        console.log(response)

        if(countriesList.length === 1){
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countriesList[0]?.capital},${countriesList[0].cca2}&appid=${WEATHER_API_KEY}`)
            const weatherJsonData = await weatherResponse.json()
            console.log(weatherJsonData)
            const {name, ...restweatherJsonData} = weatherJsonData //Desestructuracion de objetos

            return [{...countriesList[0], ...restweatherJsonData}] // rest operator
        }

        return countriesList
        console.log(response)
        console.log(weatherJsonData)

       } catch (error) {
        console.log(error)
       }
}


document.addEventListener("DOMContentLoaded", e => {
    let searchInput = document.getElementById('buscador');
        searchInput.addEventListener('keyup', async(e) => {
            e.preventDefault()
            const inputValue = e.target.value.toLowerCase();
            const countriesListResponse =  await searchCountry(inputValue)
            renderCountryData(countriesListResponse);
        })
})
