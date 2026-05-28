const countLabelEl = document.getElementById("countLabel")
const buttons = document.querySelectorAll("button")

let count = 0;

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.id==="increaseBtn"){
            button.style.color = "green"

                count++;
        countLabelEl.textContent = count;
        }

        else if(e.target.id==="decreaseBtn"){
            button.style.color = "red"
           count--;
           countLabelEl.textContent=count;
        }

        
        else if(e.target.id==="resetBtn"){
             button.style.color = "black"
           count=0;
           countLabelEl.textContent=count;
        }

        
    }) 
})


