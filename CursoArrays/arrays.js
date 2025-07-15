const bloques = document.querySelector(".contenedor")

let beers = ["erdinger", "corona", "delirium"];
let wines = ["chardonnay", "merlot", "cabernet"];

//indexOf para saber la posición
console.log(beers.indexOf("delirium"));

//Mutable
//Agrega un elemento al final
beers.push("heineken");
//Agrega el elemento al inicio
beers.unshift("modelo especial");
//Agrega el elemento indicando la posición donde agregar
beers.splice(3, 0, "fullers");
//Elimina último y primer elemento respectivamente, pueden ser guardados en una variable
let b = beers.pop();
let b2= beers.shift();

//llenar valores al arreglo
//beers.fill("pato", 0,beers.length)

//Inmutable
const alcoholicDrinks = beers.concat(wines)

const beers2 = beers.slice(0,2)
const numbers = [1,2,3,4]

const arr = [...beers, ...numbers]

function suma(a,b,c,d){
    return a+b+c+d
}

//spread operador sirve para seleccionar los elementos de un array de una forma más simplificada
//Además sirve para hacer copias de arrays
console.log(suma(...numbers))


//array de objetos
const beersObjeto = [
    {
        name:"Heineken",
        price:4.50,
        alcohol:4.5
    },
    {
        name:"Stella Artois",
        price:5.50,
        alcohol:5.0
    },
    {
        name:"Corona",
        price:2.50,
        alcohol:4.5
    },
    {
        name:"Budweiser",
        price:6,
        alcohol:4.5
    },
    
]


showDom("array1",beersObjeto);
showDom("array2",2);

function show(arr){
    for(let i=0; i < arr.length; i++){
        console.log(arr[i])
    }
}
function showDom(element, arr){
    document.getElementById(element).innerHTML = "";
    for(let i=0; i < arr.length; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i].name} $ ${arr[i].price} (${arr[i].alcohol}) </div>`
    }
}

