class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;  
    }
    getFullName(){
       console.log ( `El se llama ${this.nombre} ${this.apellido}`)
    }

     countMascota(){
         console.log(`Tiene ${this.mascotas.length} mascotas`)
     }
     getBooks(){
        console.log(` Tiene estos libros: ${this.libros.map((li) => li.nombre)}`)
     }
}

let user = new Usuario('Gastón', 'Rivero', [{nombre:"La ley", autor:"Fowler Newton"}, {nombre:"Siddhartha", autor:"Hermann Hesse"}], ["Hercules", "Lala", "principe"] );
user.getFullName();
user.countMascota();
user.getBooks();

