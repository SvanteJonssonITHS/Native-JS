let promise = fetch('https://avancera.app/cities/')

promise
  .then(response => {
    let json = response.json()
    return json
  })
  .then(result => {
    console.log(result)
  })