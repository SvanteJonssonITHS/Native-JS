let element = document.getElementById('value')
element.textContent = 1;

document.getElementById('increase').addEventListener('click', () => {
    element.textContent = Number(element.textContent) + 1
})