let cityId = prompt("Input a city Id: ")

fetch(`https://avancera.app/cities/${cityId}`, {
  method: 'DELETE'
}).then(response => {
  console.log(response)
})