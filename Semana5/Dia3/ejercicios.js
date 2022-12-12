function callMenu(){
    let nro_ejercicio= parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examenes \r\n 3.Calcular el área de un rectangulo \r\n 4.Calcular el área de un triángulo \r\n 5.Calcular el área de una circunferencia \r\n 6.Sueldo semanal de un trabajador \r\n 7.Convertir medidas de telas de mt a pg  \r\n 8.Convertir divisas de soles a dolares \r\n 9.Calcular edad de los postulantes  \r\n 10.Calcular la persona de menor edad  \r\n 11.Determinar bono de un trabajador  \r\n 12.Determinar salario de un profesor  \r\n 13.Alumnos aprobados y reprobados  \r\n 14.Determinar cantidad de focos por color  \r\n 15.Determinar si una persona puede votar o no")
    );
    if(isNaN(nro_ejercicio)){
        alert ("Hey! por favor ingresa valores")
    } else {
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1: 
            let valor1 = parseFloat(prompt("ingresa el valor 1 a sumar"))
            let valor2 = parseFloat(prompt("ingresa el valor 2 a sumar"))
            alert(ej1_suma(valor1,valor2))
            break;

        case 2:
            let note1 = parseFloat(prompt("Ingresa nota 1")) ;
            let note2 = parseFloat(prompt("Ingresa nota 2"));
            let note3 = parseFloat(prompt("Ingresa nota 3"));
            let note4 = parseFloat(prompt("Ingresa nota 4"));
            alert(ej2_promedio(note1,note2,note3,note4))
            break;

        case 3:
            let baseR = parseFloat(prompt("Ingresa la base del rectangulo"));
            let altura = parseFloat(prompt("Ingresa la altura del rectangulo"));
            alert(ej3_areaRect(baseR,altura))
            break;

        case 4:
            let baseT = parseFloat(prompt("Ingresa la base del triángulo"));
            let alturaT = parseFloat(prompt("Ingresa la altura del triángulo"));
            alert(ej4_areaTriang(baseT,alturaT))
            break;

        case 5:
            let radio = parseFloat(prompt("Ingresa el radio del circulo"));
            alert(ej5_areaCirc(radio))
            break;

        case 6:
            let horas = parseFloat(prompt("Ingresa las horas trabajadas en la semana"));
            let pago_horas = parseFloat(prompt("Ingresa el pago por hora"));
            alert(ej6_sueldoSem(horas,pago_horas))
            break;

        case 7:
            let metros = parseFloat(prompt("Ingresa los cantidad de tela en metros"));
            alert(ej7_mtrsTela(metros))
            break;

        case 8:
            let soles = parseFloat(prompt("Ingresa los cantidad en soles"));
            alert(ej8_divisas(soles))
            break;

        case 9:
            let año = parseFloat(prompt("Ingresa tu año de nacimiento"));
            alert(ej9_edad(año))
            break;

        case 10:
            let name1 = prompt("Ingresa nombre de la primera persona");
            let edad1 = +(prompt("Ingresar edad de la primera persona"));
            let persona1 = {nombre: name1, Edad: edad1};

            let name2 = prompt("Ingresa nombre de la segunda persona");
            let edad2 = +(prompt("Ingresar edad de la segunda persona"));
            let persona2 = {nombre: name2, Edad: edad2};

            let name3 = prompt("Ingresa nombre de la tercera persona");
            let edad3 = +(prompt("Ingresar edad de la tercera persona"));
            let persona3 = {nombre: name3, Edad: edad3};

            let personas = [persona1, persona2, persona3]

            alert(ej10_menor(personas))
            break;

        case 11:
            let añosT = parseFloat(prompt("Ingresa los años trabajados"));
            alert(ej11_bonos(añosT))
            break;

        case 12:
            let salario = parseFloat(prompt("Ingresa el salario minimo"));
            let años_trabajados = parseFloat(prompt("Ingrese los años trabajados"));
            let porcentaje = parseInt(prompt("Ingrese el porcentaje"));
            alert(ej12_sueldo(salario, años_trabajados, porcentaje))
            break;

        case 13:
            let num_alumnos = parseInt(prompt("Ingresa el número de alumnos"));
            alert(ej13_alumnosNotas(num_alumnos))
            break;

        case 14:
            let num_focos = parseInt(prompt("Ingresa el número de focos del lote"));
            alert(ej14_focos(num_focos))
            break;

        case 15:
            let edadV = parseFloat(prompt("Ingresar edad"));
            alert(ej15_votacion(edadV))
            break;
        }

        
}

function ej1_suma(a,b){
    if(isNaN(a)  ||  isNaN(b)){
        return "por favor ingresa valores";
    } else{
        return "El resultado es " + (a+b);
    }   
}

function ej2_promedio (n1,n2,n3,n4){
    if(isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        return "Por favor, ingresa la nota"
    } else {
        return "El resultado es " + (n1+n2+n3+n4)/4;
    }
}

function ej3_areaRect (bs,alt) {
    if (isNaN(bs) || isNaN(alt)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        return "El resultado es " +(bs*alt);
    }
}

function ej4_areaTriang (bsT,altT) {
    if (isNaN(bsT) || isNaN(altT)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        return "El resultado es " + (bsT*altT)/2;
    }
}

function ej5_areaCirc(r) {
    if (isNaN(r)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        let pi = Math.PI
        return "El resultado es " + (pi * Math.pow(r, 2)).toFixed(2);
    }
}

function ej6_sueldoSem (hr,phrs) {
    if (hr > 169) {
        return "Número de horas incorrecto"
    }
    if (isNaN(hr) || isNaN(phrs))  {
        return "Por favor ingresa los datos solicitados"
    } else {
        return "El resultado es " + (hr*phrs);
    }
}

function ej7_mtrsTela (mt) {
    if (isNaN(mt)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        return "El resultado es " + (39.37*mt);
    }
}

function ej8_divisas (pen) {
    if (isNaN(pen)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        return "El resultado es $" + (pen*0.25);
    }
}

function ej9_edad (age) {
    if (isNaN(age)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        return "El resultado es " + (2022-age) + " años.";
    }
}

function ej10_menor (prs) {

    prs.sort( function(a,b) {
        if (a.Edad > b.Edad) {
            return 1
        }
        else if (b.Edad > a.Edad) {
            return -1
        }
        else {
            return 0
        }
    })

    return prs[0].nombre + " tiene la menor edad con " + prs[0].Edad + " años";
}


function ej11_bonos (yr) {

    if (isNaN(yr)) {
        return "Por favor ingresa los datos solicitados"
    }   
    else {
        switch (yr) {
            case 1 : return "El resultado es $100" ; break;
            case 2 : return "El resultado es $200" ; break;
            case 3 : return "El resultado es $300" ; break;
            case 4 : return "El resultado es $400" ; break;
            case 5 : return "El resultado es $500" ; break;
            default: return "El resultado es $1000"; break;
        }
    }
}

function ej12_sueldo (sm, st, pc) {
    if (isNaN(sm) || isNaN(st) || isNaN(pc)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        let porcentaje = 0;
        let salario_final;
        let salarios = [];

        for (let i = 0; i < st; i++) {

            porcentaje = sm / pc;
            salario_final = sm + porcentaje;

            salario_final = (Number(sm) + Number(porcentaje)).toFixed(2);

            salarios.push("Salario del año " + (i + 1) + ": $" + salario_final + "\n");

            sm += porcentaje;
        }

        return "Los salarios del maestro son: \n\n" + salarios.toString() + "\nSueldo final: $" + salario_final;
    }
}

function ej13_alumnosNotas (na) {
    if (isNaN(na)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        notas = [];
        for (let i = 1; i <= na; i++) {
            notas.push(parseFloat(prompt('Ingresa la nota del alumno ' + i)))
        }

        aprobados = [];
        desaprobados = [];

        for (let i = 0; i < notas.length; i++) {
            if (notas[i] < 11) {
                desaprobados.push(notas[i]);
            } else {
                aprobados.push(notas[i]);
            }
        }

        return "Hay " + aprobados.length + " alumnos aprobados y " + desaprobados.length + " alumnos desaprobados";
    }
}

function ej14_focos (nf) {
    if (isNaN(nf)) {
        return "Por favor ingrese los datos solicitados"
    } else {
        let focos_verdes
        let focos_blancos
        let focos_rojos

        function generarAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        for (let i = 0; i < nf; i++) {
            focos_verdes = generarAleatorio(1, Math.round(nf / 3));
            focos_blancos = generarAleatorio(focos_verdes, Math.round(nf/2));
            focos_rojos = nf - (focos_blancos + focos_verdes);
        }

        return 'En el lote de ' + nf + ' focos, hay ' + focos_verdes + ' verdes, ' + focos_blancos + ' blancos y ' + focos_rojos + ' rojos';
    }
}

function ej15_votacion (agv) {
    if (isNaN(agv)) {
        return "Por favor ingresa los datos solicitados"
    } else {
        if (agv < 18) {
            return "No puede votar"
        } else {
            return "Puede votar"
        }
    }
}


