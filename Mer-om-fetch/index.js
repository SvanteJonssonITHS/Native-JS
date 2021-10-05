let cityName = prompt("Input a city: ")
let minPop = prompt("Input a min population: ")

let city = {
    "name": cityName, 
    "population": parseInt(minPop)
}

fetch('https://avancera.app/cities/', {
  body: JSON.stringify(city),
  headers: {'Content-Type': 'application/json'},
  method: 'POST'
})
  .then(response => response.json())
  .then(result => {console.log(result)})