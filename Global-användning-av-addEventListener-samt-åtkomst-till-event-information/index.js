let element = document.getElementById('value')
element.textContent = 1;
const decrease = document.getElementById('decrease')
decrease.disabled = true

document.getElementById('increase').addEventListener('click', () => {
    element.textContent = Number(element.textContent) + 1
    if (element.textContent > 1) decrease.disabled = false
})
document.getElementById('decrease').addEventListener('click', () => {
    element.textContent = Number(element.textContent) - 1
    if (element.textContent < 2) decrease.disabled = true
})

document.addEventListener('keydown', (e) => {
    if (e.key == "ArrowUp") {
        element.textContent = Number(element.textContent) + 1
        if (element.textContent > 1) decrease.disabled = false
    }
    else if (e.key == "ArrowDown") {
        if (element.textContent > 1) element.textContent = Number(element.textContent) - 1
        if (element.textContent < 2) decrease.disabled = true
    }
})