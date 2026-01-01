//jar ek child elemet add karych asel tr
const ul = document.querySelector("ul")
const newEle= document.createElement("li")//navin element create karych assel tr create element use kartat (ani ky type cha elmet create karych aeh te bracket madhe lihatat)
newEle.textContent="ruturaj gaikwad"//navin elemet la text add karych asel tr textconetnt
ul.appendChild(newEle)//navin element la parent la add karych asel tr appendchild use kartat (parent element.appendchild(navin element))

console.log("");



//jar ek  elemet remove karych asel tr
const ul1=document.querySelector("li")
ul1.remove()//pahile li element remove karnar
//rohit shrama remove zla
//ul.remove() kel asta tr purn ul ch remove zala asta


