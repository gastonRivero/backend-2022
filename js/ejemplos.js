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
//se ejecutan ni bien son declaradas. Se llaman en si mismas---> ()
/* 
EJEMPLO:

(function (){
console.log("esto es una función IIFE");
})();

*/

/*----- SCOPE -----*/
// ambito o alcance de una ejecución, las funciones sirven como cierre creando un ambito.
// ejemplo, todo lo que esta dentro de las {} en una función en cuanto a variables locales, pero no con variables globales

/* let numero = 10;

function imprimirNumero(){
    numero1++;
    console.log("desde dentro" + numero)
}
imprimirNumero();
console.log("desde afuera" + numero) */

/*-----CLOSURE-----*/
// conocimiento de variables por ser adyacente con otra


/*-----TEMPLATE STRING -----*/
//Se utiliza backsticks para poder concatenar de forma dinamica.

/* let string1 = "hola";
let string2 = " Mundo";

console.log(string1 +  string2)
console.log(`${string1} si hago un salto de linea aca, se va a imprimir ${string2}`); */


/*----- Ejercicio Funciones y closures-----*/

//length me muestra el tamaño del array

/* function mostrarLista(lista) {
    //if = si se cumple esta condicion
    if (lista.length > 0) {
        console.log(lista);
        //else if = si no se cumple la primer condicion, se cumple la segunda
    } else if (lista.precio < 100) {
//else = sinó se cumple la primera o la segunda, se cumple ésta
    } else {
        console.log('lista vacia');
    }
}

mostrarLista([]); */

//EJEMPLO 2
/* function filtrarPorPrecio(numero) {
    if (numero < 100) {
        console.log('valor menor a 100');
    } else if (numero > 100 && numero < 200) {
        console.log('valor entre 100 y 200')
    } else {
        console.log('valor mayor a 200');
    }
}

filtrarPorPrecio(50); */


/*----- si hay un array¿como filtrarlo?-----*/
/*----- BUCLE FOR -----*/
//inicia en cero y se lo compara con el tamaño del arreglo. y va recoriendo cada elemento "index++"
/* let array = [{
    valor: 'valor1'
}, {
    valor: 'valor2'
}];
let array2 = [];
for (let index = 0; index < array.length; index++) {
    //se accede al elemento
    const element = array[index].valor;
    if (element.valor == 'valor1') {
        array2.push(array[index]);
    }

} */

/*----- FOR EACH -----*/

/* array.forEach(element => {
    
}); */

/*----- FILTER -----*/
//se agrega una funcion de retorno o "call back". Si array2 está vacío puedo agregarle este valor.
/* array2 = array.filter(function(element){
return element.valor == 'valor1';
}); */

/*----- CLASES -----*/
// Son una forma de abstraer objetos y sus atributos.

// Estructura

//siempre en mayuscula el nombre de la clase.
/* class Cliente { 
    //constructor = define los parametros internos de la clase para luego inicializarlos
     constructor (nombre, fecha, direccion){
        //this = son las variables dentro de la clase, se llaman atributos. Las funciones dentro de la calse, se llaman métodos
        this.nombre = nombre;
        this.fecha = fecha;
        this.direccion = direccion;
    }
} */
// una clase puede heredar de otra. Por ejemplo:

/* class Producto{

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
} */
//extends = sirve para dar la herencia a otra clase, en este caso de Producto vietual a Producto.
//super = palabra reservada para estas herencias, se usa para inicializar los atributos de la clase "padre" es decir producto.
/* class ProductoVirtual extends Producto{
    constructor(nombre, precio){
        super(nombre, precio);
    }
} */


/*----- OPERADOR NEW -----*/
//Permite crear una instancia de tipo objeto definido por el usuario. Se utiliza sobre una clase
//1- Crea un objeto vacio | 2- ejecuta el constructor de la calse en el contexto del objeto creado | 3- retorna el objeto

/*class Producto{

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    obtenerNombre(){
        console.log(this.nombre)
    }
    obtenerPrecio(){
        console.log(this.precio)
    }
}
 class ProductoVirtual extends Producto{
    constructor(nombre, precio){
        super(nombre, precio);
        //tambien se pueden generar su propios atributos como por ejemplo el siguiente. Este no se mostrará dado que no esta en "super" hasta que se cree su propio método en su interior.
        this.tipo='virtual'
    }
    obtenerTipo(){
       return this.virtual;
    }
} */

// Crear un producto, se llama instanciación de producto. instanciar. Siempre despues del NEW, va el tipo de objeto a crear-
/* let heladera = new Producto('heladera', 150);
console.log(heladera);
heladera.obtenerNombre();
heladera.obtenerPrecio();

let productoVirtual = new ProductoVirtual("game", 200)
console.log(productoVirtual); */




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