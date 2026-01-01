//parentElement
var par = document.querySelector("li");
var p =par.parentElement;
console.log(p);
//li cha parent kon "ul" tr toh select hoto

console.log("");


//children
var child = document.querySelector("ul");
var c =child.children;
console.log(c);
//ul cha children kon kon "li" tr te sarv select hotat
console.log(c[0]);//ul   cha pahila child select karto


console.log("");


//childrenNode
var childn = document.querySelector("ul");
var cn=child.childNodes;//ya madhe ul nantr text lihaychi jaga aste tila pn count kartat ani tyache child element ahet tyala pn count krtat
console.log(cn);

console.log(cn[0]);//ul cha pahila child select karto



