//una funcion es un conjunto de soluciones o ejecuciones para poder realizar tareas

//funciones expresivas

function nombreDeLaFuncion(){
    //una vez declarada mi funcion todo el codigo que hagamos dentro de este solo se va a ejecutar cuando la llame

    console.log("mi primera funcion")
  
}

nombreDeLaFuncion()

//una funcion es creada para poder reutilizar codigo
// una de las misiones de la funcion es poder hacer un trabajo repetitivo

function sumar (numero1, numero2){
    //primero vamso a convertir los parametros a numeros 

    const converNumero1 = +numero1;
    const converNumero2 = +numero2;

    const suma = converNumero1 + converNumero2

    console.log("es el resultado", suma) 
}

sumar(20,20)

//Que es "return": palabra clave que se encarga de retornarnos un valor

//FUNCION FLECHA
const suma2 =(a,b)=>{
    return a+b
}
console.log("otra forma", suma2(20,30))


//TIPO DE DATOS
let nombre = "maria"; //STRING
let age = 34; //number
let talla = 1.76 //number float
let boll = true // boleano
let indefinido;
let nulo = null;
let simbolo = symbol('asd');
let object = {};

console.log(nombre,typeof (nombre))
console.log(age,typeof (age))
console.log(boll,typeof (boll))

//cambiar tipo de datos

console.log(age,typeof toString(age))
console.log(nombre,typeof parseInt(nombre))
console.log(talla,typeof parseFloat(talla))


//tipos
