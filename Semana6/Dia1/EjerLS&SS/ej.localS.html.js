const btnLogin = document.querySelector('btn-login');

btnLogin.onclick = function (event) {
    event.preventDefault ();

 const inputs =document.querySelectorAll('input')    

 inputs.forEach((input)=>{

    console.log(inputs)
    localStorage.setItem(input.name, input.value)
})

login();
}

const email = localStorage.getItem('email');
const pass = localStorage.getItem('pass');

function login() {
    const email = localStorage.getItem('email');
    const pass = localStorage.getItem('pass');
    form.style.display = "none";
    usuarioSection.style.display = "block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = pass;

}

const form = document.querySelector("#login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#pass");

const btnCerrarSesion = document.querySelector("#logout");
const usuarioSection = document.querySelector("#logged");

if(email !== null && pass !== null){
}else {
    usuarioSection.style.display = "none";
}

btnCerrarSesion.onclick = function() {

    localStorage.clear();

    form.style.display = "block";
    usuarioSection.style.display = "none";
}