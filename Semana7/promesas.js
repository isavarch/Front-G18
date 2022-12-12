//promesas : sirve para pdoer ejecuitar al asyncrono
//cunado hacemos una peticion a un API --esto tiene un tiempo de espera 

//new promise()
//esrto determinamos que es una promesa
//resolve : este retornarna la respuesta cuyando todo esta ok!
//reject: cuando esta algo mal 
//retornan algo 
//cvuando creamo una poromesa esta no tiene return


const promesa = new Promise((resolve,reject)=>{
    //vamos a emular un tiempo de espera

    setTimeout(()=>{
        //esta funcion va a esperar 3 segundos para poder retornar el resolved
        resolve("aca demora en llegar a console")
    },3000);
});

//como ejecutamos la promesa
async function getDataFromPromesa(){
    const respuesta = await promesa;
    console.log(respuesta);
}

getDataFromPromesa()

//existe otra forma de leer promesas, esta forma existe del async await
//.then()=> entonces -luego de 
//.then un callback
//callback es una funcion que ejecuta algo en base a un resultado

promesa.then((respuesta)=>{
    //cuando acabes de ejecutar la promesa obtener el valos y guardarlo en respuesta

    console.log("then", respuesta)
})


//vamos a crear una promesa con errores...
const promesasConError = (validacion)=>{
    return new Promise((resolve,reject)=>{
        if (validacion){
            resolve("la calidacion está ok!")
        }else {
            //new error es una clase de js la cual nos permite retornar con mensaje
            reject(new Error("Error en la validacion"))
        }
    });
}

//veamos como poder validar un error usando .then()
promesasConError()
.then((respuesta)=>{
    console.log(respuesta)
})
//veamos como poder validar un error usando .catch()
//si algo esta mal autoimaticamente entra al catch()

.catch((error)=>{
    console.log(error.message)
})

//vamos a validae un error usando async await
const validacionAsync = async()=>{
    //con try catch
    try{
        //aca va a intentar obtener el resultado de la peticion
        const respuesta = await promesasConError(false);
        console.log("validacionesAsync",respuesta)
    }catch(error){
        //si detcta un error automaticamente entra al catch
        console.log("validacionAsync", error.message)
    }
};

validacionAsync()

//ejemplo real

const getUserGithub = async ()=>{
    try{
        const response = await fetch("https://api.github.com/users/scscscscscs");
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error.message)
    }
};
getUserGithub()

//veamos un poco de los que el statuts code ,
//normalmen estos codigo son respuesta de una peticion fallida 

//200 ,500,401,403,404,201,512
//si una peticvion n0o devuelve un status que sea 200 201 
//que la erespuesta es ok 
//200 = ok
//201 = ok y ademas significa que algo ha sido creado 

// si la url response  un 500 404 512 
// hay un error
//404 = es el eroror que muestra cuandono encuentra la url , es devir no existe
//500 = es ele error que retorna cunado hay un preblema en serviudor 
//512 = es un eror de espacio en el servidor 

//get  = obetner datos 
//post = enviar /crear datos 
//put = actualizar datos
//delete = borrado