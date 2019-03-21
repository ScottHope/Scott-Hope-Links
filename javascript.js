let searchBox = document.querySelector("input");
let buttons = document.querySelectorAll(".button");
let match = document.querySelector("#matches");
let inputBG = document.querySelector(":root");
// let count = 0;
searchBox.addEventListener("input", buttonSearch);
searchBox.focus();

sessionStorage.menuSearch === undefined ? sessionStorage.setItem("menuSearch", "") : (searchBox.value = sessionStorage.menuSearch, buttonSearch());

function buttonSearch() {
  count = 0;
  sessionStorage.menuSearch = searchBox.value;
  buttons.forEach(function (a) {
    a.textContent.toLowerCase().search(searchBox.value.toLowerCase()) > -1 ? (a.classList.remove("invalid"), count++) : a.classList.add("invalid");
  }
  );
  (searchBox.value === "" && count === 63) ? match.textContent = "" : match.textContent = "Matches : " + count;
  count === 0 ? inputBG.style.setProperty("--inputColor","#faa") : inputBG.style.setProperty("--inputColor","");
}