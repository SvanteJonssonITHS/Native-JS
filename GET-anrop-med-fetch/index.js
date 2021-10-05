let name = prompt("Input a city: ")

let promise = fetch(`https://avancera.app/cities/?name=${name}`)

promise
  .then(response => {
    let json = response.json()
    return json
  })
  .then(result => {
    console.log(result)
  })