//primero capturamos el elemento que disparará un evento
const btnLogin = document.querySelector('#btn-login');


//la funcion y el evento
btnLogin.onclick = function (event) {
    event.preventDefault ();

const inputs =document.querySelectorAll('input')
//inswerta una valor o almacenar localstorage

inputs.forEach((input)=>{

    console.log(inputs)
    localStorage.setItem(input.name, input.value)
})

login();

}
//captura del local storage
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');

function login() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    form.style.display = "none";
    usuarioSection.style.display = "block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;

}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");
const usuarioSection = document.querySelector("#usuario-logged");

if(email !== null && password !== null){
    //el usuario esta logeado
    //si está logeado, va a ocultar el form
}else {
    usuarioSection.style.display = "none";
}

btnCerrarSesion.onclick = function() {
    //vamos a eliminar las variables del local storage
    localStorage.clear();

    //mostrar el formulario y ocultar el emsaje
    form.style.display = "block";
    usuarioSection.style.display = "none";
}