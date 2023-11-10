const numberSpan = document.querySelector(".span");
const buttons = document.querySelector(".buttons_conteiner");


buttons.addEventListener("click", (ev)=> {
    
    if(ev.target.classList.contains
    ("substract")) {
        numberSpan.innerHTML --    
    };


    if(ev.target.classList.contains
    ("add")) {
        numberSpan.innerHTML ++    
    };

    if(ev.target.classList.contains
    ("reset")) {
        numberSpan.innerHTML = 0    
    }
    setColor()
});


const setColor =() => {
    if(numberSpan.innerHTML>0) {
        numberSpan.style.color = "green"
    }
    else if (numberSpan.innerHTML<0) {
        numberSpan.style.color = "red"
    }
    else {numberSpan.style.color = "blue"}
}


/* veikia kodas :)

const numberSpan = document.querySelector(".span");
const substract = document.querySelector(".substract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

substract.addEventListener("click", ()=> {
    numberSpan.innerHTML --
});
add.addEventListener("click", ()=> {
    numberSpan.innerHTML ++
});
reset.addEventListener("click", ()=> {
    numberSpan.innerHTML = 0
}); */