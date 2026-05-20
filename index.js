const searchBoxEl = document.getElementById("search-box")
const magnifyEl = document.getElementById("magnify")

magnifyEl.addEventListener("click", ()=>{
    searchBoxEl.classList.toggle("hide")
})