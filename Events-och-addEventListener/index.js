let element = document.getElementById('value')
element.textContent = 1;
document.getElementById('decrease').disabled = true

document.getElementById('increase').addEventListener('click', () => {
    element.textContent = Number(element.textContent) + 1
    if(element.textContent > 1) document.getElementById('decrease').disabled = false
})
document.getElementById('decrease').addEventListener('click', () => {
    element.textContent = Number(element.textContent) - 1
    if(element.textContent < 2) document.getElementById('decrease').disabled = true
})