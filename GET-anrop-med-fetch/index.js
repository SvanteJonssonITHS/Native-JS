let city = prompt("Input a city: ")

let promise = fetch(`https://avancera.app/cities/${city}`)

promise
  .then(response => {
    let json = response.json()
    return json
  })
  .then(result => {
    console.log(result)
  })