/*-----Console-----*/
// console.log("string string"); /*string*/
// console.log(1);/*number*/
// console.log(true);/*boolean*/
// console.log(null);/*null: vacio por defecto, se crea una variable sin datos*/
// console.log(undefined);/*undefined se crea una variable no definida */
// console.log([1,2,3,4]);/*Array*/
// console.log({a:1, b:2, c:3});/*Object*/
//  console.clear()
// console.error("error")
// console.warn("warning")

/*-----Variables y Tipos-----*/
/* ----------------------------------------------------
las variables "let" solo funcionan entre llaves 
ejemplo
if (true){
let ejemploVariable = 0
}

console.log(ejemploVariable) <--- no lo va a poder leer, tiene que estar dentro de las llaves{}
-------------------------------------------------------*/
// let elNombreDeLaVariable = "String";
// let elNombreDeLaVariable1 = 1;
// let elNombreDeLaVariable2 = true;
// let elNombreDeLaVariable3 = null;
// let elNombreDeLaVariable4 = undefined; //undefined
// const variableQueNoCambia = "este string queda fijo para poder utilizarlo en todo el proyecto, no se puede pisar ni modificar como el Let";

// elNombreDeLaVariable = 2; //para  cambiar de dato

// /*Tipo de objeto*/
// let variableArray = ["valor 1", "valor 2"]
// let variableObjeto = {
//     id: 1,
//     nombre: "nombre",
//     edad: 24,
// };
// console.log(/*colocar el nombre de la variable*/)

/*Cuando un "const" es un objeto,  se puede cambiar los valores como sucede con los "let". Solo hay que buscar el objeto y declararlo

Ejemplo:

const objeto = {id:2, nombre:Gasti};

objeto.nombre = "Gastón"

console.log(objeto) = objeto con nuevo valor en nombre.
*/

//ejercicio de clase

// let ej = {
//     nombre: "Gasti",
//     edad: 24,
//     precio: 152,
//     seriesFavoritas: ["GOT", "vikings"],
//     peliFav:["The rite", "Gladiator"],
// }

// console.log(ej.peliFav)


/*-----Concatenación-----*/

// Se utiliza el "+ " si son "number" se suman, si son string se concatena.

/*-----Agregar elemento en array-----*/ // .PUSH

/*------------------------------------------
Ejemplo: 
let arreglo = ["uno", "dos"];
console.log(arreglo)

let copiaArreglo = ["uno", "dos"];

arreglo = copiaArreglo;

arreglo.push("tres");

console.log(copiaArreglo)

------------------------------------------*/

/*-----FUNCIONES-----*/

//Utiliza la palabra reservada "function",  se le asigna un nombre y dentro de parentecis se colocan los parametros. Luego, se abren llaves y se colocan las instrucciones.

/*
EJEMPLO 1:

function sumar( numero1, numero2) {
    console.log(numero1 + numero2);
}

sumar(2,3); <----- para ejecutar la funcion

EJEMPLO 2;

function sumar( numero1, numero2) {
   return numero1 + numero2;
}
let sumatoria = sumar(2,3)
console.log(sumatoria);
*/

/* FUNCIONES ANONIMAS*/
// let variable = () => {
//     console.log("variable")
// };
// variable();

/* FUNCIONES IIFE*/
//se ejecutan ni bien son definidas
/* 
EJEMPLO:

(function (){
console.log("esto es una función IIFE");
})();

*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/

/*----- -----*/