let searchBox = document.querySelector("input"),
buttons = document.querySelectorAll(".button"),
match = document.querySelector("#matches>span"),
inputBG = document.querySelector(":root"),
counter = document.querySelectorAll(".counter img")[0];

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
  (searchBox.value === "" && count === 63) ? match.innerHTML = 0 : match.innerHTML = count;
  count === 0 ? inputBG.style.setProperty("--inputColor","#faa") : inputBG.style.setProperty("--inputColor","");
}

counter.removeAttribute("title");