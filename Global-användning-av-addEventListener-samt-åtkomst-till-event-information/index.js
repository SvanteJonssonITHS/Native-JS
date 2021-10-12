document.addEventListener('keydown', (e) => {
    if(e.shiftKey && e.key != "Shift") {console.log(e.key)}
})