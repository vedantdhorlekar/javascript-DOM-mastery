let hero = document.querySelector("#hero")

//getattribute(tya anavchya  attribute chya aat ky lihila ahe te samjat=define)
console.log(hero.getAttribute("id"));//hero
console.log(hero.getAttribute("about"));//hello


console.log("---");



//setattribute(jar navin attribute set karych asel tr)
hero.setAttribute("example",123)
console.log(hero.outerHTML);//<div id="hero" about="hello" example="123"></div>




console.log("---");

//sarv attrivute ektra baghayche astil tr
for(let attr of hero.attributes)
{
    console.log(`${attr.name} = ${attr.values}`);
    
}

