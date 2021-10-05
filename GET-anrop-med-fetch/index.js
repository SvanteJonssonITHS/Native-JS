let promise = fetch('https://avancera.app/cities/4787e794-b3ac-4a63-bba0-03203f78e553')

promise
  .then(response => {
    let json = response.json()
    return json
  })
  .then(result => {
    console.log(result)
  })