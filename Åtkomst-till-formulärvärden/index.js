let button = document.getElementById("send")
let name = document.getElementById("name")
let greeting = document.getElementById("greeting")

button.addEventListener('click', () =>{
    greeting.innerText = `Hej ${name.value}!`
})