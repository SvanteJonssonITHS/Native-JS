let list = document.getElementsByTagName("ol")[0]
let oldItem = document.getElementsByTagName("li")[2]
let newItem = document.createElement("li")
newItem.innerText = "Svante"
list.insertBefore(newItem, oldItem)