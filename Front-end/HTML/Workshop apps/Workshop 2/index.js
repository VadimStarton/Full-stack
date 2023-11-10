const span = document.querySelector("span")
const button = document.querySelector(".button")

const generateHexColor = () => {
    const randomColor = math.random(). 
    toString(16).slice(2,8)

    span.innerHTML = '#' + randomColor

body.style.backgroundColor = '#' + randomColor
    console.log(randomColor);
}

button.addEventiListener("click")

body.addEventListener("mousewheel", generateHexColor)