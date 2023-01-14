

const result = document.getElementById('result')

document.addEventListener("DOMContentLoaded", e => {
    fetchData(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('testApi.json')
        const data = await res.json()
        console.log(data)
        // banderillas(data)
        formularioCliente(data)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <img src="${item.flag}" class="flag-img">
        <h2>${item.name}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4><b>Capital:</b></h4>
                <span>${item.capital}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4><b>Population:</b></h4>
                <span>${item.population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4><b>Region:</b></h4>
                <span>${item.region}</span>
            </div>
        </div>
        `
    });
    result.innerHTML = elementos
}



// INPUT
let searchInput = document.getElementById('buscador');

const formularioCliente = data => {
    searchInput.addEventListener('keyup', e => {
        e.preventDefault()
        const letraCliente = searchInput.value.toLowerCase()
        
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.toLowerCase()
            if (letraApi.indexOf(letraCliente) !== -1) {
                return item
            }
        })
        banderillas(arrayFiltrado);
    })
}