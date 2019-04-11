console.log("holis");
//practica 1
//Queremos ir a comprar algo a un supermercado.
//Si tenemos mas de 17 anos y al menos $50
//podemos comprar.
//En cambio si tenemos menos de 10 anos,
//el vendedor nos deja el producto
//a la mitad de precio

function practica1(edad, plata) {
    if (edad > 17 && plata >= 50) {
        console.log("Puede comprar");
    } else if(edad < 10) {
        console.log("mitad de precio");
    } else {
        console.log("No puede comprar");
    }
}

practica1(20, 10);


//practica 2
//En base a una variable numero
//determinar si es par o impar

function practicaParImpar(number){
    if(number % 2 == 0){
        console.log("par");
    }else{
        console.log("impar")
    }
}
practicaParImpar(1231);

// 3- Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días
// correspondiente.
function almanque(mes){
    if(mes=="enero" || mes =="marzo" ||mes=="mayo" || mes=="agosto" || mes =="julio" ||mes=="octubre" || mes=="diciembre" ){
        console.log("31 dias");
    }else if(mes=="abril" || mes=="junio" || mes=="septiembre" ||mes=="nobiembre"){
        console.log("30 dias");
    }else if(mes=="febrero"){
        console.log("28 dias");
    }
    else{
        console.log("no es un mes");
    }
}
almanque("marzo");
// 5- Dada una variable que puede ser una letra, determinar si es una vocal.
function letraVocal(letra){
   if(letra=="a"|| letra=="e"||letra=="i"||letra=="o" || letra=="u"){
        console.log("es una vocal");
   }
   else{
       console.log("no es una vocal");
   }
}
letraVocal("a");
// 6- Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y determinar
// si eso es mayor que y, de lo contrario sumar x y z (x+z) y multiplicarlo por y.
var numberx=300;
var numbery=200;
var numberz=100;
var result;

function practicaSeis(numberx,numbery,numberz){

    if(numberx > numbery)
    {
         result= numberx - numberz;
            if(result>numbery){
                console.log("resta es mayor que Y");
            }else{
                console.log((numberx + numberz)*numbery);
            }
    }
}
practicaSeis(numberx,numbery,numberz)

// 7- Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales, se deben realizar los cálculos en
// función de los siguientes
// criterios:
// Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
// Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
// Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
// Si lleva menos de 3 años se le aplica un aumento del 3%.
var años = 2;
function calcularSueldo(){
  if(años >=10){
        console.log(((40000 / 100)*10)+40000 );
  }else if(años<10 && años>=5){
        console.log(((40000 / 100)*7)+40000 );
  }else if(años<5 && años > 3){
        console.log(((40000 / 100)*5)+40000 );
  }else{
        console.log(((40000 / 100)*3)+40000 );
  }
}
calcularSueldo(años);

//fizzbuzz 
//Escribe, en el lenguaje de programación que desees, un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por el palabro “Fizz” y, a su vez, los múltiplos de 5 por “Buzz”. Para los guarismos que, al tiempo, son múltiplos de 3 y 5, utiliza el combinado “FizzBuzz”.

var array = [];
function fizzBuzz(){

    for(i = 1; i <101; i++){
            if(i%3==0 && i%5==0){
                array.push("FizzBuzz");
            }else if(i% 5==0){
                array.push("Buzz");
            }else if(i%3 == 0 ){
                array.push("Fizz");
            }else{
                array.push(i);
            }
    }
    console.log(array);
}
fizzBuzz(array);

// Ejercicio 1 - Cargar de forma automática incremental, un array de números a partir de un largo
// dado por el usuario.
var n = 10;
var array1 =[];

for(i=0;i<n;i++){
    array1[i]=i;
    console.log(array1[i]);
}

// Ejercicio 2 - Repetir el ejercicio anterior, ubicando 0 (ceros), en las posiciones pares y un valor que coincida con el índice en las posiciones impares

for(i=0;i<n;i++){
    if(i%2==0){
        array1[i]=0;
    }else{
        array1[i]=i;
    }
    console.log(array1[i]);
}
// Ejercicio 3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por pantalla el valor máximo.
// Ejercicio 4 - Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su posición.
var xx = [10,24,36,7,98,11,14,20]
var maxValue=0;
var position;
for(i=0;i<xx.length;i++){
      if(xx[i]>maxValue){
        maxValue=xx[i];
        position=i;
      }
       
}
console.log(maxValue , position);


// Ejercicio 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10], mostrar por pantalla el valor máximo y
//la cantidad de veces que se repite.

var x = [98,24,36,7,98,11,2,20,1,98,98];
var rep =0;
for(i=0;i<x.length;i++){
    if(x[i]>maxValue){
        maxValue=x[i];
        
      }
      if(x[i]==maxValue){
        rep+=1;
      }
}
console.log(maxValue , rep);

//Crear una nueva arr con los numeros repetidos  mas de una vez;
var arr = [2, 3, 2, 10, 23, 4, 23, 5]
var rep = []

for(i=0;i<arr.length;i++){
    var cont=0;
    for(j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            cont+=1;
        }
    }
    if(cont>1 && rep.indexOf(arr[i])==-1){
        rep.push(arr[i]);

    }
}
console.log(rep);

//ddado los siguientes dos arreglos crear un bloque de codigo que permita determinar si:
//1 son iguales
//2 cual de los 2 es mas largo
//3 cuantas letras tienen en comun

x=["a","l","f","a"];
y=["a","l","f","a","j","o","r"];



function Equal(arr1,arr2){
    var rep=[];
    if(arr1.length != arr2.length){
        console.log("no son iguales");
        if(arr1.length > arr2.length)
            console.log("el primer array es mas grande");
        else
            console.log("el segundo array es mas grande");
    }else{
        console.log("son del mismo tamaño");
    }   

    for(i=0;i<arr1.length;i++){
        cont=0;
      
            if(arr1[i]==arr2[i]){
                cont+=1;
            }
        
        if(cont>=1){
            rep.push(arr1[i]);
        }
    }
    if(rep.length>=1 ){
        console.log("se repiten " + rep.length +" letras y son " + rep);
    }else{
        console.log("no se repiten ninguna ");
    }
}

Equal(x,y);

//dado el siguiente array de datos determinar 
//1 cual de los 2 personajes es mas viejo
//2 cual de los 2 personajes esta casado
//3 si fido recibira un aumento equicvalente al 12.5% del sueldo de gervasio cuanto sera el monto a cobrar?

datos1 = ["fido","gomez",36,15000,true];
datos2 = ["gervasio","fernandez",32,28500,false];

function datos(datos1, datos2, index,porcentaje){

    if(datos1[2] > datos2[2]){
        console.log("fido es mas viejo :"+datos1[2]);
    }else{
        console.log("gervasio es mas viejo :"+ datos2[2]);
    }
    if(index == 1){
        var aumento=(datos2[3]/100)*porcentaje;
        console.log("aumento: "+aumento);
    }else if(index==2){
        var aumento=(datos1[3]/100)*porcentaje;
        console.log("aumento: "+aumento);
    }else{
        console.log("error index");
    }
    
}
datos(datos1,datos2,1,50);
