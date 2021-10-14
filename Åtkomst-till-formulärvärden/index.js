let button = document.getElementById("send")
let name = document.getElementById("name")
let greeting = document.getElementById("greeting")
let error = document.getElementById("errors")

if(name.value.length > 0) {
    greeting.innerText = `Hej ${name.value}!`
    button.disabled = false
} else {
    error.style.display = "block"
    button.disabled = true
}

button.addEventListener('click', () =>{
    greeting.innerText = `Hej ${name.value}!`
})

name.addEventListener('input', (e) =>{
    if(e.target.value.length < 1) {
        button.disabled = true;
        error.style.display = "block"
    } else {
        button.disabled = false;
        error.style.display = "none"
    }
})