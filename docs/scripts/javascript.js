let searchBox = document.querySelector("input"),
buttons = document.querySelectorAll(".button"),
match = document.querySelector("#matches>span"),
inputBG = document.querySelector(":root"),
counter = document.querySelectorAll("#counter img")[0];

searchBox.addEventListener("input", buttonSearch);
searchBox.focus();

sessionStorage.menuSearch === undefined ? sessionStorage.setItem("menuSearch", "") : searchBox.value = sessionStorage.menuSearch;
buttonSearch();

function buttonSearch() {
  count = 0;
  sessionStorage.menuSearch = searchBox.value;
  for (var i = 0; i < buttons.length; i ++){
    buttons[i].textContent.toLowerCase().search(searchBox.value.toLowerCase()) > -1 ? (buttons[i].classList.remove("invalid"), buttons[i].tabIndex = 0, count++) : (buttons[i].classList.add("invalid"), buttons[i].tabIndex = -1);
  }

  (searchBox.value === "" && count === buttons.length) ? match.innerHTML = 0 : match.innerHTML = count;
  count === 0 ? inputBG.style.setProperty("--inputColor","#faa") : inputBG.style.setProperty("--inputColor","");
}

//counter.removeAttribute("title");
