//que es un objeto: es una entidad independiente, el cual tiene propiedades y atributos
//sta compuesto por un (keys) y un value

//el objeto de un carro
const carro={
    color: "azul",
    motor: 1.6,
    modelo: "mustang",
    marca: "changan",
    nuevo: false,
};

console.table("es un objeto", carro)

// objetc pewrsona

const persona= {
    edad:34,
    nombre: "Ana",
    sexo: "femenino",
    talla: 1.75,
    estadoCivil: "casada",
    mayorEdad: true,
    donacionOrganos: true,
};

//acceder a un atributo

console.log("nombre", persona.estadoCivil)
console.log("persona", persona)

//como sustituir
persona.nombre = "Maria";
persona.talla = 1.68;

//agregar elemento = key y el value

persona["profeson"] = "ingeniero"
persona["bailarin"] = true;
persona.nacionalidad = "Noruega";


//objetos de ofinica

