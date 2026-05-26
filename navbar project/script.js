const btnEl = document.getElementById("btn")
const sidebarEl =  document.getElementById("sidebar")

 let isOpen=false;
btnEl.addEventListener("click", ()=>{

    if(isOpen===false){
        sidebarEl.style.left ="0"
        isOpen = true;

    }

    else{
        sidebarEl.style.left= "-250px"
        isOpen = false;
    }

})