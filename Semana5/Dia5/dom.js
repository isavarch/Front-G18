// // existe dentro de js el document el cual nos permite obtener elementos de html

// //obtener elemento segun el nombre de su etiqueta
// //tag = etiqueta



// const inputs= document.getElementsByTagName("input")
// console.log("input", inputs);


// //convertir un html collet a array normal
// const newInputs = Array.from(inputs);
// console.log("newInputs", newInputs)

// //bucle map
// newInputs.map((newInput)=>{
//     console.log("nueva forma", newInput.value)
// })

// //bucle for
// for(let i = 0; i < inputs.length; i++){
//     console.log("input", inputs[i].value);
// }

// //----------------------------------------------------
// const password = document.getElementById('input_password')
// console.log("password", password)

// // acceder al elemento seleccionando el valor de mi input

// password.style.backgroundColor = "#000";
// password.style.color = "#fff";

// const email = document.getElementById('input_email')
// email.style.backgroundColor = "#581845"
// email.style.color = "#DAF7A6";

// // por clases

// const inputsName = document.getElementsByClassName("last_name")
// console.log(inputsName)

// const inputName = Array.from(inputsName)
// console.log(inputsName)

// //bucle forEach
// inputName.forEach((input)=>{
//     console.log(input.value)
// })

const form = document.getElementsByTagName('form')
console.log(form)

const input2 = document.querySelectorAll('input')
console.log(input2)



