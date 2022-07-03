/*let x = 10;

const p = new Promise((resolve,reject) =>{
    if(x==10){
        resolve('La variable es igual a 10');
    }else{
        reject('La variable no es igual a 10');
    }
});

//Cuando mi promesa tenga una valor positivo o la operación que haya resuelto sea positiva
p.then(res => {
    console.log("succes: "+res)
})
.catch(error =>{
    console.log("error: "+ error)
});
*/


// let x = 10;

// console.log("1. Proceso iniciado")

// setTimeout(()=>{
//     x = x*3+2;    
//     console.log('2. Proceso Terminado');
//     console.log("El resultado despues es "+ x);
// }, 5000);

// console.log("3. El resultado es: " + x );

// let x = 10;
// const promesa = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         x = x*3+2;    
//         console.log('2. Proceso Terminado');
//         resolve(x)
//     }, 5000);
// });
// console.log("1. Proceso iniciado")

// promesa.then(res =>{
//     console.log("3. El resultado es: "+ res)
// })


let usuarios = [{
    id: 1,
    nombre: "Marcos"
},
{
    id:2,
    nombre: "Lena"
}];

let telefonos = [{
    id: 1,
    telefono: 12345678
},
{
    id:2,
    telefono: 87654321
}];

const obtenerUsuario = id =>{
    return new Promise((resolve, reject) =>{
        if(usuarios.find(usuario => usuario.id === id )){
            console.log("El usuario existe");
            resolve(obtenerTelefono(id))

        }else{
            reject("El usuario no existe")
        }
    });
};

const obtenerTelefono = id =>{
    return new Promise((resolve, reject) =>{
        if(telefonos.find(telefono => telefono.id === id )){
            resolve("El teléfono existe");
        }else{
            reject("El teléfono no existe")
        }
    });
};


obtenerUsuario(3)
.then(result => {
    return result;
})
.then(mensaje =>{
    console.log(mensaje)
})
.catch(err => {
    console.log(err)
});






