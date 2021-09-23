let price = prompt("Skriv in kostnaden:");
if(price){
    if(!isNaN(price)) window.alert(price * 0.8); 
    else window.alert("Du skrev inte in ett nummer.")
} 