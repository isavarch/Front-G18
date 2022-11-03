//aca haremos la dinamica
 
let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");

let title = document.querySelector("h1");
let container = document.querySelector(".container");
let mode = "light"

function lightMode () {
    button.className = "switch";
    container.className = "container";
    circle.className = "circle";
    title.textContent = "light mode";
}

function darkMode () {
    button.className = "darkButton";
    container.className = "darkContainer";
    circle.className = "darkCircle";
    title.textContent = "Dark mode";
}

circle.addEventListener("click",()=>{
    if(mode == "light"){
        darkMode();
        mode = "darck"
    } else {
        lightMode();
        mode = "light"
    }
})