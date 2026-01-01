//previousElementSibling
var a=document.querySelector(".me");
console.log(a.previousElementSibling);//rohit shrama waala li cha element denar

//previousSibling
var b=document.querySelector(".me");
console.log(b.previousSibling);//pn ha text denar karan (text chi jaga aste ti pn ha consider krto)






console.log("");

//nextElementSibling
var a=document.querySelector(".me");
console.log(a.nextElementSibling);//next elemet mhnjech virat kohli waala li cha element denar 

//nextSibling
var b=document.querySelector(".me");
console.log(b.nextSibling);////pn ha text denar karan (text chi jaga aste ti pn ha consider krto)






console.log("");

//fisrt child
var fChild=document.querySelector("ul");
console.log(fChild.firstChild);//ulul

var Child=document.querySelector("ul");
console.log(Child.firstElementChild);//rohit shrma wla element denar


console.log("");


//last child
var child=document.querySelector("ul");
console.log(child.lastChild);//lulu

var child=document.querySelector("ul");
console.log(child.lastElementChild);//suresh raina wla element denar










console.log("");
//inerhtml
let x=document.querySelector(".me")
x.innerHTML="<b>M S DHONI </b>"
x.innerHTML+="- the captain"
console.log(x.innerHTML);



//outerhtml
let y=document.querySelector(".me")
y.outerHTML="<b>M S DHONI </b>"
console.log(y.outerHTML);//tag sobat return krto vatat














