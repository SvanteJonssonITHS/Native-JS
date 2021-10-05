let cityId = prompt("Input a city Id: ")
let cityName = prompt("Input a city: ")
let minPop = prompt("Input a min population: ")

let city = {
    "id": cityId,
    "name": cityName, 
    "population": parseInt(minPop)
}

fetch(`https://avancera.app/cities/${cityId}`, {
  body: JSON.stringify(city),
  headers: {'Content-Type': 'application/json'},
  method: 'PUT'
})
  .then(response => response.json())
  .then(result => {console.log(result)})