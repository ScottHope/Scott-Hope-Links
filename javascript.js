let searchBox = document.querySelector("input");
let buttons = document.querySelectorAll(".button");
searchBox.addEventListener("input", buttonSearch);

if(sessionStorage.menuSearch === undefined){
  sessionStorage.setItem("menuSearch","");
} else {
  searchBox.value = sessionStorage.menuSearch; buttonSearch();
}

function buttonSearch(){
  sessionStorage.menuSearch = searchBox.value;
  buttons.forEach(function(a){
    if(a.textContent.toLowerCase().search(searchBox.value.toLowerCase()) === -1) {
      a.classList.add("invalid")
    }else{
      a.classList.remove("invalid")
    }
  }
  )
}