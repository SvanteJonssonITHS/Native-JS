let promise = fetch('https://avancera.app/cities/')

promise
  .then(response => {
    let cities = response.json()
    return cities
  })
  .then(result => {
    localStorage.setItem('cities', JSON.stringify(result))
  }) 