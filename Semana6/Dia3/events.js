const btnPrueba = document.querySelector('#btn-prueba');

btnPrueba.onclick = function () {
    console.log("click desde el boton")
    console.log(event)
    Swal.fire("hola mundo")
}

//////////////////////////////////////////

const bntPregunta = document.querySelector('#btn-pregunta') 

bntPregunta.onclick = function () {
    Swal.fire ("Alguna pregunta" , "Respuesta a la pregunta")
}

//------------------------------------
 const btnError = document.querySelector ('#btn-error')

 function showAlert(icon,title,text,confirmButtonText){
    Swal.fire({
        title,
        text,
        icon,
        confirmButtonText
      })
 }

 btnError.onclick = function () {
    showAlert("error", "Error!", "Do you want to continue"  , "Ok" )
 }

 //------------------------------------------------
 const btnWarning = document.querySelector ('#btn-warning')

 btnWarning.onclick = function () {
    showAlert("warning", "Peligro!", "Do you want to continue"  , "Ok" )
 }

 const btnSuccess = document.querySelector ('#btn-success')

 btnSuccess.onclick = function () {
    showAlert("success", "Success!", "Proceso exitoso"  , "Ok" )
 }

const btnAlertBotones = document.querySelector('#btn-alert-botones')

btnAlertBotones.onclick = function (){
    Swal.fire({
        title: "Alerta",
        text: "texto de alerta",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "guardar",
        denyButtonText: "negar"
    }).then ((resultado)=>{
        console.log("resultado", resultado);

        if(resultado.isConfirmed){
            showAlert("success", "confirmado", "se confirmaó la operacion", "Ok")
            console.log("marcó la confirmacion")
        }
        if(resultado.isDenied){
            console.log("operacion denegada")
        }
        if(resultado.isDismissed){
            showAlert("warning", "Cancelada", "se canceló la operacion", "Ok")
            console.log("operacion cancelada")
        }
    })
}

//-------------------------------
const btnAlertaImagen = document.querySelector('#btn-alerta-imagen')
const urlGOT = "https://i.pinimg.com/564x/b3/bf/44/b3bf44765b5e56cde60fb70073b5e4cb.jpg"

btnAlertaImagen.onclick = function() {
    Swal.fire({
        title: "GOT",
        text: "alerta con imagen",
        imageUrl: urlGOT,
        imageHeight: 200,
        imageWidth: 200,
    })
}

const btnAlertaCustom = document.querySelector('#btn-alerta-custom')
btnAlertaCustom.onclick = function() {
    Swal.fire({
        title: "GOT",
        text: "alerta personalizada",
        background: `url(${urlGOT})`,
        color: "#000",
        backdrop: 
        `rgba(0,0,0,0.3)
        url(https://i.pinimg.com/originals/4f/52/09/4f52099fe83641bdcec23ba6fa5df88c.gif) left top no-repeat`,
    })
}

const btnAlertaInputs = document.querySelector('#btn-alerta-inputs')

btnAlertaInputs.onclick = function(){
    Swal.fire({
        title: "input para email",
        input: "email",
        inputLabel: "ingrese su correo",
        inputPlaceholder: "Ingresa un correo valido",
                
    }).then((resultado)=>{
        //obtengo el resultado de lo que escribió el usuario
        console.log(resultado.value)
    })
}

const paises = document.querySelector("#select-options")
//onchange sirve para detectar si hay un cambio en mi elemento
paises.onchange = function(event){
    //de evento quiero capturar el value opctions
    const{value, options} = event.target
    //event, targen, value

    console.log( value)

const index = options.selectedIndex;
console.log("index",index)
console.log("texto",options[index].text);
}

const usuario ={
    nombre: "Maria",
    apellido: "Gomez",
    edad: 32,
    direccion: {
        calle: "calle siempre viva",
        numero: 456,
        ciudad: "Arizona"
    }

}

const{nombre, apellido, edad, direccion}= usuario;

console.log(apellido)



