let cityId = prompt("Input a city Id: ")
let cityName = prompt("Input a city: ")

let city = {
    "name": cityName, 
}

fetch(`https://avancera.app/cities/${cityId}`, {
  body: JSON.stringify(city),
  headers: {'Content-Type': 'application/json'},
  method: 'PATCH'
})
  .then(response => response.json())
  .then(result => {console.log(result)})