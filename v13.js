//insertAdjacentHTML
 
var target = document.querySelector(".hero")
var newEle="<b> vedant dhorlekar</b>"

//target.insertAdjacentHTML("beforebegin", newEle)//div suru haychya adhi
//target.insertAdjacentHTML("beforeend", newEle)//div khatam hayvychya adhi

// target.insertAdjacentHTML("afterend", newEle)//div samplaya vr ala
target.insertAdjacentHTML("afterbegin", newEle)//div suru alya nanatr navin conetnt add zala