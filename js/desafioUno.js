class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;  
    }
    getFullName(){
       console.log (`${this.nombre} ${this.apellido}`)
    }

     countMascota(){
         console.log(this.mascotas.length)
     }
     getBooks(){
        console.log(this.libros)
     }
}

let user = new Usuario('Gastón', 'Rivero', [{nombre:"La ley", autor:"Fowler Newton"}, {nombre:"Siddhartha", autor:"Hermann Hesse"}], ["Hercules", "Lala", "principe"] );
user.getFullName();
user.countMascota();
user.getBooks();
