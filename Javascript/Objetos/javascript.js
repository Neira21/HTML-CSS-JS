/*const coleccionDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones:["Stayin Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
};

function ActualizarDiscos(discos, id, propiedad, valor){
    if(valor === ""){
        delete discos[id][propiedad];
    }else if(propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    }else{
        discos[id][propiedad] = valor;
    }
}
console.log(coleccionDiscos[5439])

ActualizarDiscos(coleccionDiscos, 5439, "canciones", "Mamma Mia")

console.log(coleccionDiscos[5439])

ActualizarDiscos(coleccionDiscos, 5439, "canciones", "Hola")
*/


/*
var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "0543236453",
        "gustos": ["Pizza", "Programación"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casos interesantes", "Violín"]
    }
]

//console.log(contactos[0]);

function BuscarContacto(nombre, propiedad){
    for(var i=0; i<contactos.length;i++){
        if(contactos[i].nombre === nombre){
            return contactos[i][propiedad] || "La propiedad no existe";
        }
    }
    return("No existe el usuario");
}
*/

//console.log(BuscarContacto("Sherlock", "apellido"));

function GenerarFraccionAleatoria(){
    return Math.round(Math.random()*10);
}

console.log(GenerarFraccionAleatoria());

const BloqueInicial = document.getElementById("Inicio");

function AplicarEstilo(){
    if(BloqueInicial.getAttribute("class") =="class"){
        console.log("Ya tiene el estilo");
        BloqueInicial.setAttribute("class", "");
    }
    else{
        console.log("Añadiendo estilo");
        BloqueInicial.setAttribute("class", "class");
    }   
}




function mostrarNombre(n){
    document.getElementById("Mensaje").innerHTML = n.country[0].country_id;
}
async function traerPaís(){
    const respuesta = await fetch("https://api.nationalize.io?asname=jorge");

    if(!respuesta.ok){
        let opps = "404 no encontré nada";
        alert(opps);
        throw new Error(opps);
    }

    const nombre = respuesta.json();
    return nombre;
}
traerPaís().then(mostrarNombre);