let buttonsEl = document.querySelectorAll("button")
let inputEl = document.querySelector("#input")
 
  let string = "";
buttonsEl.forEach((button)=>{
    button.addEventListener("click", ()=>{

        let value = button.textContent

        if(value==="AC"){
            string = "";
        }

        else if(value==="DEL"){
            string = string.slice (0,-1);
        }
        else if(value==="=") {
            string =eval(string)
          
        }

        else{
            string +=value
        }

        inputEl.value = string;

    })
})


