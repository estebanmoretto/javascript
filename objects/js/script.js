// // 1) Crear un objeto que represente un Auto
// // 	•	Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima, peso
// // 	•	Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
// // 	•	Por lo tanto mediante el metodo acelerar tendra que ir aumentando la propiedad velocidad hasta llegar a la velocidad maxima.

var auto={
    color:"red",
    modelo:"t1000",
    patente:"ABC 123",
    marca:"ford",
    prendido:false,
    velocidad:0,
    velocidadMax:150,
    peso:1000,

    encender:function(){
        if(!this.prendido)
        this.prendido=true;
    },
    apagar:function(){
        if(this.prendido)
        this.prendido=false;
    },
    acelerar:function(){
       if(this.prendido){
        while(this.velocidad<this.velocidadMax){
            this.velocidad++;
            console.log("acelerando: la velocidad es "+this.velocidad+"km/h");
        }
        if(this.velocidad>this.velocidadMax){
            console.log("acelerando: la velocidad es "+this.velocidadMax+"km/h");
        }
       } 
    },
    frenar:function(){
      
        if(this.velocidad>0){
            this.velocidad--;
            console.log("desacelerando: la velocidad es "+this.velocidad+"km/h");
        }else{
            this.velocidad=0;
            console.log("desacelerando: la velocidad es "+this.velocidad+"km/h");
        }
    },
    mostrarVelocidad:function(){
        console.log(" la velocidad es "+this.velocidad+"km/h");
    }
}


/////ej2

//Partiendo del siguiente array de objetos
/*Resolver los siguientes puntos:

Mostrar la pelicula más vieja
Mostrar todas las peliculas ordenadas por titulo
Mostrar la película con mejor rating
Mostrar la película con mayor cantidad de actores
Mostrar la película más nueva
Mostrar la película más larga
Eliminar la pelicula con peor rating
Eliminar la película más larga
Eliminar peli3 y peli5*/
var peli1 = {
  id: 1,
  titulo: "matrix 1",
  anio: 1999,
  rating: 7.9,
  duracion: 131,
  actores: ['Keanu Reeves', 'Carrie‑Anne Moss', 'Laurence Fishburne', 'Hugo Weaving']
};
var peli2 = {
  id: 2,
  titulo: "matrix 2",
  anio: 2003,
  rating: 6.5,
  duracion: 138,
  actores: ['Keanu Reeves', 'Carrie‑Anne Moss', 'Laurence Fishburne', 'Hugo Weaving', 'Monica Bellucci']
};
var peli3 = {
  id: 3,
  titulo: "aladin",
  anio: 1992,
  rating: 7.4,
  duracion: 87,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar', 'Abu']
};
var peli4 = {
  id: 4,
  titulo: "aladin: el regreso de jafar",
  anio: 1994,
  rating: 4.9,
  duracion: 66,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar']
};
var peli5 = {
  id: 5,
  titulo: "aladin y el rey de los ladrones",
  anio: 1995,
  rating: 5.9,
  duracion: 80,
  actores: ['Jasmín', 'Aladdin', 'El Genio', 'Jafar', 'Cassim']
};
var peli6 = {
  id: 6,
  titulo: "los locos adams",
  anio: 1991,
  rating: 5.9,
  duracion: 101,
  actores: ['Anjelica Huston', 'Raul Julia', 'Christopher Lloyd', 'Christina Ricci', 'Elizabeth Wilson', 'Dan Hedaya', 'Jimmy Workman', 'Judith Malina']
};
var peli7 = {
  id: 7,
  titulo: "loco por mery",
  anio: 1998,
  rating: 6.2,
  duracion: 119,
  actores: ['Cameron Diaz',  'Ben Stiller',  'Matt Dillon',  'Chris Elliott',  'Lee Evans',  'Lin Shaye', 'W. Earl Brown',  'Keith David',  'Markie Post',  'Brett Favre',  'Harland Williams', 'Jeffrey Tambor',  'Richard Jenkins',  'Sarah Silverman',  'Jonathan Richman']
};

var misPeliculas = [];

misPeliculas.push(peli1);
misPeliculas.push(peli2);
misPeliculas.push(peli3);
misPeliculas.push(peli4);
misPeliculas.push(peli5);
misPeliculas.push(peli6);
misPeliculas.push(peli7);

//Mostrar la pelicula más vieja
function PeliVieja(misPeliculas){
    var año;
    for(i=0;i<misPeliculas.length;i++){   
        if(año==null){
        año=misPeliculas[i].anio;        
       }else{
           if(año>misPeliculas[i].anio)
                año=misPeliculas[i].anio;
       }
     }
     console.log(año);
}
PeliVieja(misPeliculas);

//Mostrar todas las peliculas ordenadas por titulo
function ordenPorTitulos(misPeliculas){
    var titulos=misPeliculas.slice(0);
    titulos.sort(function(a,b){
        var x=a.titulo.toLowerCase();
        var y=b.titulo.toLowerCase();
        return x < y?-1:x>y?1:0;
    });
    console.log(titulos);
}
ordenPorTitulos(misPeliculas);

//Mostrar la película con mejor rating
function mejorRating(misPeliculas){
    var puntaje;
    for(i=0;i<misPeliculas.length;i++){   
        if(puntaje==null){
        puntaje=misPeliculas[i].rating;        
       }else{
           if(puntaje<misPeliculas[i].rating)
                puntaje=misPeliculas[i].rating;
       }
     }
     console.log(puntaje);
}
mejorRating(misPeliculas);

//Mostrar la película con mayor cantidad de actores
function masActores(misPeliculas){
    var actores= [];
    var pelicula;
    for(i=0;i<misPeliculas.length;i++){
        if(actores==null){
            actores=misPeliculas[i].actores;
            pelicula=misPeliculas[i].titulo
        }else{
            if(actores.length<misPeliculas[i].actores.length){
                actores=misPeliculas.actores;
                pelicula=misPeliculas[i].titulo
            }               
        }
    }
    console.log("la pelicula con mas actores es: "+pelicula);
}
masActores(misPeliculas);

//Mostrar la película más nueva
function peliMasNueva(misPeliculas){
    var año;
    var pelicula;
    for(i=0;i<misPeliculas.length;i++){   
        if(año==null){
        año=misPeliculas[i].anio;      
        pelicula=misPeliculas[i].titulo
       }else{
           if(año<misPeliculas[i].anio){
                año=misPeliculas[i].anio;
                pelicula=misPeliculas[i].titulo
           }
                
       }
     }
     console.log("la pelicula es "+pelicula + " en el año " +año);
}
peliMasNueva(misPeliculas);

//Mostrar la película más larga
function peliMasLarga(misPeliculas){
    var duracion;
    var pelicula;
    for(i=0;i<misPeliculas.length;i++){   
        if(duracion==null){
        duracion=misPeliculas[i].duracion;      
        pelicula=misPeliculas[i].titulo
       }else{
           if(duracion<misPeliculas[i].duracion){
                duracion=misPeliculas[i].duracion;
                pelicula=misPeliculas[i].titulo
           }
                
       }
     }
     console.log("la pelicula es "+pelicula + " y la duracion es " +duracion);

}
peliMasLarga(misPeliculas);

//Eliminar la pelicula con peor rating
function eliminarPeorRating(misPeliculas){
    var puntaje;
    var index;
    for(i=0;i<misPeliculas.length;i++){   
        if(puntaje==null){
        puntaje=misPeliculas[i].rating;     
        index=i;
       }else{
           if(puntaje>misPeliculas[i].rating){
            puntaje=misPeliculas[i].rating;
            index=i;
           }         
       }
     }
     misPeliculas.splice(index, 1);
     console.log(puntaje+" "+index);
     console.log(misPeliculas);
}
eliminarPeorRating(misPeliculas);

//Eliminar la película más larga




/*Netflix

Crear un objeto que representa una pelicula.

Deberá tener nombre, genero, actores, calificaciones, cantidad de vistas
Deberá tener un metodo que retorne su calificación promedio
Crear un objeto Netflix, con los siguientes métodos:

agregarPelicula(pelicula): agregar un objeto pelicula en el objeto Netflix
buscarPeliculasPorGenero(genero): buscar dentro de todas las peliculas que tenemos las que tienen el genero que viene por parametro
buscarPeliculasPorActor(nombre): buscar dentro de todas las peliculas que tenemos las que tienen el actor que viene por parametro
buscarPeliculaPorNombre(nombre): buscar dentro de todas las peliculas que tenemos la que tiene el titulo que viene por parametro
calificarPelicula(nombre, puntuacion): debera buscar la pelicula, y agregar la calificacion pasada por paremtro
verPelicula(nombre): debera sumar la cantidad de vistas que tiene la pelicula pasada por parametro
mostrarPeliculasMasVistas(): mostrar las 3 peliculas con mas cantidad de vistas
mostrarPeliculasMejorCalificadas(): mostrar las 3 peliculas con mayor calificacion*/

