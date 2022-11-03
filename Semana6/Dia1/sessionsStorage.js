
const crear = document.querySelector("#crear-session")
const obtener = document.querySelector("#obtener-session")
const eliminar = document.querySelector("#eliminar-session")

//funcion para el primer boton
crear.onclick = () => {
    //para poder crear la variable... invocar a session
    console.log('dasfas');

    sessionStorage.setItem(
        "variable_1",
        "mi primera variable en session storage"
    );

    
}

//segundo boton
obtener.onclick = funtion() {
    const variable = sessionStorage.getItem("variable_1");
    console.log(variable)
}

//tercer boton
eliminar.onclick = funtion(){
    sessionStorage.removeItem("variable_1")
}