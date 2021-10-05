let cityId = prompt("Input a city Id: ")
let cityName = prompt("Input a city: ")
let cityPop = prompt("Input population: ")
let city = {}

if (cityName) {
    city.name = cityName
}
if (cityPop) {
    city.population = parseInt(cityPop)
}
if (cityId) {
    fetch(`https://avancera.app/cities/${cityId}`, {
            body: JSON.stringify(city),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
}