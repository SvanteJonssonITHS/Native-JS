let items = document.getElementsByTagName("li")

for (let i = 0; i < items.length; i++) {
    items[i].innerHTML += "<span class=\"credits\">100 credits</span>"    
}