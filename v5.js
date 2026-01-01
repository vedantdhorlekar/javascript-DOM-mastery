//previous element sibling

//eka line madhe code lihaych asel tr
console.log(document.querySelector(".hero").previousElementSibling);//ms dhni wla purn lement tag select hobnar ani hyachya pn adhi ch pahoje asel tr ajun ek vel previous elementsibling lavaych . krun
//previossibloing lihila asta tr text ala asta

console.log("");

//eka line madhe code nasel  lihaych asel tr
var a=document.querySelector(".hero");
console.log(a.previousElementSibling);

console.log("");

//jar toch pahila child elemet asel tr tyach previous element sibling null dkahvto
console.log(document.querySelector(".first").previousElementSibling);//null kaarn hyachya adhi konta li nhi ahe ul ahe direct

console.log("");

var c=document.querySelectorAll(".me");//class me 2 element la ahe
c.forEach((ele)=> console.log(ele.previousElementSibling));//mg doghanche pn previous elemet ale for loop laun

