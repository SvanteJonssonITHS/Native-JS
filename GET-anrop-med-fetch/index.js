let cityName = prompt("Input a city: ")
let minPop = prompt("Input a min population: ")

let promise = fetch(`https://avancera.app/cities/?name=${cityName}&minPopulation=${minPop}`)

promise
  .then(response => {
    let json = response.json()
    return json
  })
  .then(result => {
    console.log(result)
  })