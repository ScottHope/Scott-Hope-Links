let search = document.querySelector("input");
let buttons = document.querySelectorAll(".button");
search.addEventListener("keyup", buttonSearch);

function buttonSearch(){

buttons.forEach(function(a){

if(a.textContent.toLowerCase().search(search.value.toLowerCase()) === -1) {a.classList.add("invalid")}else{a.classList.remove("invalid")}
console.log(a);

})}