//replace child
const list =document.querySelector("ul")
const childToChnage = list.children[0];
const newEle= document.createElement("li");
newEle.textContent="rohhit vadapav"
list.replaceChild(newEle,childToChnage);