// ALGORITMO CON CONDICIONAL Y ALGORITMO UTILIZANDO CICLO

// CAMBIO DE PESOS URUGUAYOS A DOLARES, CON UN MAXIMO DE 200 USD


/* const valorDolar = 42.00;

let montoIngresado = prompt("Ingrese el monto a convertir ($U " + valorDolar + "c/u) ");
let totalDolares = Number(montoIngresado) / valorDolar;
if (totalDolares > 200) {
    prompt("No es posible comprar mas de 200 USD")
} else if ((montoIngresado === "") || (montoIngresado === null)) { 
    
    alert("Debe ingresar un valor");
    prompt("Ingrese el monto a convertir ($U " + valorDolar + "c/u) ");

} else { (totalDolares < 200)
         alert ("Ha comprado " + totalDolares + " dolares.");
         console.log( Number(montoIngresado));
} */





//ALGORITMO PARA SABER CUANTAS MARCAS DE AUTOMOVILES CONCES, escribir "ESC" para terminar el ciclo

/* let automovil = "";
let marca
do {
    marca = prompt ("Ingrese todas las marcas de automoviles que recuerde");
    if (marca != "ESC") {
        automovil = automovil + marca + "\n";
    }
} while (marca != "ESC");

console.log ("Conoces estas marcas de automoviles");
console.log (automovil)  */




//Concatenacion

/* let nombre = "mauro"
let apellido = "roves"


let saludo = "Hola mi nombre es " + nombre + " " + apellido +".";
console.log(saludo);

//Interpolacion de variables 
//TEMPLATE STRING

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`
console.log(saludo2); */





//FUNCIONES DECLARADAS

/* function estoEsUnaFuncion () {
    console.log ("Uno");
    console.log ("Dos");
    console.log ("Tres");
} */

//INVOCACION DE FUNCION - quiere decir que se va a ejecutar

/* estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion(); */



/* function unaFuncionQueDevuelveValor () {
    console.log ("Uno");
    return 19                         //SI SE COLOCA DOS RETURN DENTRO DE UNA FUNCION SE IGNORA TODO DESPUES DLE PRIMER RETURN
    console.log ("Dos");
    console.log ("Tres");
    return "La funcion ha retornado una Cadena de texto";
} */

/* let valorDeFuncion = unaFuncionQueDevuelveValor();

console.log(valorDeFuncion) */





/* function saludar (nombre, edad) {
    console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " anios");
}

saludar("kenai", 7); */

//OTRO EJEMPLO DE FUNCIONES

/* function saludar (nombre = "Desconocido", edad = 0) {
    console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " anios");
}

saludar(); */







//Funciones declaradas VS funciones expresadas


/* funcionDeclarada();    //En este caso JS ordena la funciones declaradas, por eso la ejecuta incluso si la invocacion de la funcion esta antes de la funcion en si

function funcionDeclarada() {
    console.log(" Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada");
}

funcionDeclarada();


//Funcion ANONIMA
const funcionExpresada = function() {
    console.log("Esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dara error");
}

funcionExpresada(); */




//ARRAYS   -- SE ESCRIBEN CON --[PARENTECIS RECTO]-- 

/* const a = [];
const b = [1, true, "Hola", ["A", "B", "C"]];

console.log(a);
console.log(b);
console.log(b.lenght);
console.log(b[2]);                             //Acceso a los ARRAY
console.log(b[0]);
console.log(b[3][2]);


const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Array(100).fill(false);
console.log(d); */


// 6 CODERHOUSE - ARRAYS ejemplos

/* let simpson = ["Homero", "March", "Lisa", "Maggie", "Bart"];

console.log(simpson[simpson.length-1]);    //Al escribirlo de esta manera siempre va a imprimir el ultimo item del array */

//RECORRIDO DEL ARRAY         --  Empleamos un bu


/*  for ( let i=0; i<simpson.length-1; i++) {
    console.log(simpson[i]);
}
 */

















/* const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push ("Negro");           //PUSH AGREGA UN ELEMENTO AL FINAL
console.log (colores);

colores.pop();
console.log(colores)            //POP QUITA EL ULTIMO ELEMENTO

const c = [20, 40, 60, 80, 100];
console.log(c)

c.push (120);
console.log(c)

c.pop ();
console.log(c)

c.pop ();
console.log(c) */







//OBJETOS    -- SE ESCRIBE CON {LLAVES} --

/* const b = {}
console.log (b); */


//Dentro de un objeto las propiedades se van a llamar variables y a los metodos se les llaman funciones

/*  const mauro = {
    nombre: "Mauro",
    apellido: "Roves",
    edad: 29,
    pasatiempos: ["Dibujar", "Juegos de Computadora"],
    soltero: false,
    contacto: {
        email:"mauro.roves@gmail.com",
        movil:"099993733",
    },
    saludar: function() {
        console.log("Hola")
    },
    decirMiNombre: function(){
        console.log("Hola me llamo " + this.nombre)
    }
}

console.log(mauro);
console.log(mauro["nombre"]);
console.log(mauro["apellido"]);

console.log(mauro.edad);       //ESTA MANERA DE ESCRIBIRLO SE USA MAS QUE LA DE ARRIBA
console.log(mauro.soltero);
console.log(mauro.pasatiempos);
console.log(mauro.pasatiempos[1]);
console.log(mauro.contacto);
console.log(mauro.contacto.email);
mauro.saludar();
mauro.decirMiNombre();

console.log(Object.keys(mauro));
console.log(Object.values(mauro));
console.log(mauro.hasOwnProperty("nombre"));
console.log(mauro.hasOwnProperty("nacimiento"));  */  //FALSE porque el nombre d eprop. no se encuentra dentro del objeto


// FUNCION CONSTRUCTORA -     -El contructor de objeto es una funcion que usamos para crear un nuevo objeto cuando sea necesario - se utiliza el "new"


/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona ("Homero", 39, "Av. Siempreviva 742");          //"new"
const persona2 = new Persona ("Marge", 39, "Av. Siempreviva 742");

console.log(persona1["edad"]);
console.log(persona1.nombre); */



/* function Persona(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
}

const persona1 = new Persona({nombre: "Homero", edad: 39, calle: "av.Siempreviva"})

console.log(persona1); */


// ALGUNOS METODOS DE OBJETOS

/* let cadena = "hola coder";

//Propiedad del objeto string, largo de la cadena - .length-
console.log(cadena.length);

//Metodo de objeto String: Pasar a minuscula  - .toLowerCase -
console.log(cadena.toLowerCase());

//Metodo de objeto String: Pasar a mayuscula  - .toUpperCase -
console.log(cadena.toUpperCase()); */


// METODOS personalizados dentro d eun objeto



/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function() {console.log("Hola soy " + this.nombre)}
}

const persona1 = new Persona ("Homero", 39, "Av. Siempreviva 742");          //"new"
const persona2 = new Persona ("Marge", 39, "Av. Siempreviva 742");
persona1.hablar(); */




//OPERADOR IN y For...IN

//in - devuelve true si la propiedad especificada existe en el objeto
//for...in - permite acceder a todas las propiedades del objeto


/*  const personal = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva"
}

console.log("nombre" in personal);      //devuelve true porque la clave "nombre" existe en el objeto personal

console.log("origen" in personal);      //devuelve false porque la clave "origen" no existe en el objeto personal 

for (const propiedad in personal) {      //recorremos todas las propiedades del objeto con el ciclo for...in
    console.log(personal[propiedad]);
}
 */




//OPERADORES
//ARITMETICOS + - * / % ()

/* let a = 5 + 5 - 10 * 3
let modulo = 5 % 2; // esto nos devuelve el RESIDUO de dividir 5 entre 2

console.log(a);
console.log(modulo);





//RELACIONALES  >, <, >=, <=, ==, ===, !=, !==

console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);
 */

/* 
 = 1 igual es ASIGNACION de variable
 == 2 iguales es comparacion de valores
 === 3 iguales es comparacion de dato y de valor
*/

/* console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);


console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false); */





//INCREMENTO y DECREMENTO

/* let i = 1;

//i = 1 + 2;
i += 3;
console.log(i);


//OPERADOR UNARIO    SUMAN O RESTAN DE A UNA UNIDAD UNICAMENTE

i++;
i--;
 */





/* 
LOGICOS

! - Not: Niega, es decir lo que es verdadero lo vuelve falso y viceversa
|| - Or: Cuando tengo 2 o mas condiciones, con que una se cumpla, es decir que sea verdadera, el "Or - ||" - validara
&& - And: Cuando tengo 2 o mas condiciones, todas tienen que cumplirese, es decir que sea verdaderas, para que "And - &&" se valide

*/

//EJEMPLOS

/* console.log(!true);    //SE INVIERTEN POR EL "! - Not"
console.log(!false);

console.log((9 === 9) || ("9 === 9")); // el "Or - ||" valida a verdadero

console.log((9 === 9) && ("9" === "9")); // Se valida ya que los dos son true
console.log((9 === 9) && ("9" === 9)); // No se valida porque uno es falso */




// if - else 

//let edad = 19;    

/*if (edad > 17) { 
    console.log("Eres mayor de edad");  
} else {
    console.log("Eres menor de edad"); 
}



if (edad >= 18) { 
    console.log("Eres mayor de edad");  
} else {
    console.log("Eres menor de edad"); 
}



if (edad < 18) { 
    console.log("Eres menor de edad");  
} else {
    console.log("Eres mayor de edad"); 
}



if (edad <= 17) { 
    console.log("Eres menor de edad");  
} else {
    console.log("Eres mayor de edad"); 
} */



/* 
Déjame dormir: 0hrs - 5hrs
Buenos dias: 6hrs - 11hrs
Buenas tardes: 12hrs - 18hrs
Buenas noches: 19hrs - 23hrs
*/

/* let hora = 22;

if (hora >= 0 && hora <= 5) {
    console.log("Dejame dormir");
} else if (hora >= 6 && hora <= 11) {
    console.log("buenos dias");
} else if (hora >= 12 && hora <= 18) {
    console.log("buenas tardes");
} else {
    console.log("buenas noches");
}



if (hora < 6) {
    console.log("Dejame dormir");
} else if (hora > 5 && hora < 12) {
    console.log("buenos dias");
} else if (hora > 11 && hora < 19) {
    console.log("buenas tardes");
} else {
    console.log("buenas noches");
} */



//OPERADOR TERNARIO    (condicion) ? verdadero : falsa

/* console.log("Operador Ternario");

let eresMayor = (edad >= 18)
? "Eres mayor de Edad"
:"Eres menor de Edad";

console.log(eresMayor); */



// switch - case

/* 
domingo - 0
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6
*/

/* let dia = 6;    // ES UNA BUENA PRACTICA USAR ESTA CONDICIONAL CUANDO EL VALOR DE LA VARIABLE VA A CAMBIAR

switch (dia) {
    case 0:
        console.log ("Domingo")
        break;

    case 1:
        console.log ("Lunes")
        break;
    
    case 2:
        console.log ("Martes")
        break;

    case 3:
        console.log ("Miercoles")
        break;

    case 4:
        console.log ("Jueves")
        break;

    case 5:
        console.log ("Viernes")
        break;
    
    case 6:
        console.log ("Sabado")
        break;
    default:
        console.log ("El dia no existe");
        break;    
    }
 */




// BREAK Y CONTINUE

/*     const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
    if(i === 5) {
        break;
    }
    console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numeros[i]);
} */




//DESTRUCTURACION

/* let numeros = [1, 2, 3];   //Sin destructuracion

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);

//-----------------------

const [one, two, three] = numeros; //Con destructiracion
console.log(one, two, three);


const persona = {
    nombre: "Jon",
    apellido: "Mircha",
    edad: 35
}

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad); */




//OBJETOS LITERALES

/* let nombre = "Abril",
    edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function() {
        console.log("guau guau")
    }
}

console.log(perro);
perro.ladrar()


const dog = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar() {
        console.log("guau guau guau guau")
    }
} */





// Parametros REST y Operador SPREAD

/* function sumar (a, b, ...c) {           // PARAMENTROS DENTRO DE UNA FUNCION
    let resultado = a + b;

    c.forEach(function(n) {
        resultado += n
    });

    return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));




const arr1 = [1, 2, 3, 4, 5],        // OPERADOR SPREAD
    arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3) */






// ARROW Function --- const saludar = () => console.log 


/* const saludar = function () {           // FUNCION EXPRESADA
    console.log("hola");
}

saludar (); */


/* function saludar () {                      // FUNCION DECLARADA
    console.log("hola");
}

saludar();
 */




/* const saludar2 = () => console.log("hola2");                  // ARROW FUNCTION - se saca la palabra function y despues de la llave se escribe la flecha =>
saludar2();                                                

const saludar3 = () => console.log("hola3");              // ARROW FUNCTION cuando tu funcion tiene una sola linea de codigo o extruccion
saludar3(); */



/* const saludar4 = nombre => console.log(`Hola4 ${nombre}`);             // Cuando una funcion FLECHA recibe un solo parametro (en este caso "nombre"), no es necesario poner los parentecis
saludar4("irma");                                                       
 */



/* const sumar = function (a, b) {
    return a + b;
}

console.log(sumar(8,9)); */



/* const sumar = (a, b) => a + b;               // ARROW FUNCTION DEL EJEMPLO ANTERIOR

console.log(sumar(9,9));



const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();



const numeros = [1, 2, 3, 4, 5]; */

/* numeros.forEach(function (el, index) {
    console.log(`El elemento ${el} esta en la posicion ${index}`);
});
 */



/* numeros.forEach((el, index) => {
    console.log(`El elemento ${el} esta en la posicion ${index}`);            // ARROW FUNCTION DEL EJEMPLO ANTERIOR
});
 */


//numeros.forEach((el, index) => console.log(`El elemento ${el} esta en la posicion ${index}`));            // ARROW FUNCTION DEL EJEMPLO ANTERIOR SIN PARENTECIS




/* const perro = {                // Esto es un OBJETO                    
    nombre: "Abril",                                                          //Funcion dentro de un objeto
    ladrar: function () {                                                //TENER CUIDADO con usar arrow functions para declarar metodos anidados en objetos literales                                                                         
        console.log(this)                                                   // Para esta funcion "this" es el OBJETO
    }
}

perro.ladrar();



const perro1 = {                // Esto es un OBJETO                      // ARROW FUNCTION dentro de un objeto
    nombre: "Anuk",                                                        // el ARROW FUNCTION tiene la capacidad de saltar el contexto en el que esta y heredar el contexto donde se encuentra el objeto padre
    ladrar: () => {                                                         // ESTO NO ES UNA BUENA PRACTICA
        console.log(this)
    }
}

perro1.ladrar();




const perro2 = {                // Esto es un OBJETO                    
    nombre: "Mia",                                                          //Funcion dentro de un objeto
    ladrar() {                                                                                                                         
        console.log(this)                                                   // ESTA ES UNA BUENA PRACTICA en cuanto a funciones dentro de objetos
    }
}

perro2.ladrar(); */



//Programacion Orientada a Objetos = POO

/* 
Clases - Modelo a seguir.
Objetos - Es una instancia de una clase
Atributos - Es una caracteristica o propiedad del objeto (son variables dentro de un objeto)
Metodos - son las acciones que un objeto puede realizar
*/


//CLASES

/* class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}

const personal = new Persona ("Homero", 39, "Av. Siempreviva");

console.log(personal) */




/* class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar() {
        console.log("hola soy " + this.nombre);
    }
}

const persona1 = new Persona ("Homero", 39, "Av. Siempreviva");

persona1.hablar();

 */


//EJEMPLO clase Producto



/*  class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    sumaIVA() {
        console.log(this.precio = this.precio * 1.21);
    }
    vender() {
        console.log(this.vendido = true);
    }
}

/* const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");

console.log(producto1);
console.log(producto2); 

 console.log(producto1.precio)              //Nos devuelve el valor inical del produco "125"         ----1

producto1.sumaIVA();                       //Volvemos a preguntar por el valor el producto1 * el IVA

console.log(producto1.precio)           //Se actualiza el valor inicial

console.log( producto1.sumaIVA() );             //----2
 producto2.sumaIVA();
producto1.vender(); */






/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function() {console.log("Hola soy " + this.nombre)}
}

const persona1 = new Persona ("Homero", 39, "Av. Siempreviva 742");          //"new"
const persona2 = new Persona ("Marge", 39, "Av. Siempreviva 742");
persona1.hablar(); */














//FUNCION CONSTRUCTORA

/* function Cliente(nombre, fecha, direccion) {
 
    this._nombre = nombre;
    this._fechaNacimiento = fecha;
    this._direccion = direccion;
} */







// SEGUNDA ENTREGA



/* 
 class Producto {
    constructor(nombre, precio, dimensiones, tecnica, numero) {
        this.nombre = nombre;
        this.precio = precio;
        this.dimensiones = dimensiones;
        this.tecnica = tecnica;
        this.numero = numero;
        }
    }
    
        
    

const producto1 = new Producto ("Torre de Pisa", 10, "A4", "Fibra", 1);
const producto2 = new Producto ("Baños Termales - Viaje de Chihiro", 20, "A4", "Fibra", 2);
const producto3 = new Producto ("Patron sobre lienzo", 30, "A3", "Oleo sobre lienzo", 3);
const producto4 = new Producto ("Patron con anomalia", 10, "A4", "Acrilico", 4);


alert("Laminas:" + "\n" + "Torre de pisa - A4 - Fibra - 10 USD - Numero 1" + "\n" + "Baños Termales - Viaje de Chihiro - A4 - Fibra - 20 USD - Numero 2" + "\n" + "Patron sobre lienzo - A3 - Oleo sobre lienzo - 30 USD - Numero 3" + "\n" + "Patron con anomalia - A4 - Acrilico - 10 USD - Numero 4");

let laminaElegida = prompt("Ingresar numero de la Lamina a Comprar");
let agradecer = "\n" + "Gracias por tu compra"


if (laminaElegida == producto1.numero) {
    alert("El precio de tu retrato es: " + producto1.precio + " USD" + agradecer);
} else if (laminaElegida == producto2.numero) {
    alert("El precio de tu retrato es: " + producto2.precio + " USD" + agradecer);
} else if (laminaElegida == producto3.numero) {
    alert("El precio de tu retrato es: " + producto2.precio + " USD" + agradecer);
} else if (laminaElegida == producto4.numero) {
    alert("El precio de tu retrato es: " + producto2.precio + " USD" + agradecer);
} else { 
    alert("Ingrese un numero del 1 al 4")
} 
 */








//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos
const remeras = [];
const buzos = [];
const pantalones = [];

//Cargo el stock de productos segun su categoria
//REMERAS
remeras.push(new Producto("Remera Cobra", 1, 2000, "Negro", 30));
remeras.push(new Producto("Musculosa Good Times", 2, 1400, "Blanco", 10));
remeras.push(new Producto("Remera Aeternum", 3, 1400, "Blanco", 20));
remeras.push(new Producto("Remera Good Times", 4, 1400, "Blanco", 15));
//BUZOS
buzos.push(new Producto("Buzo Scream", 5, 4000, "Negro", 20));
buzos.push(new Producto("Buzo Negro Oversized", 6, 3800, "Negro", 40));
buzos.push(new Producto("Buzo Batik", 7, 3800, "Negro", 40));
//PANTALONES
pantalones.push(new Producto("Jogging NC", 8, 2900, "Negro", 10));
pantalones.push(new Producto("Short Notte", 9, 1000, "Negro", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const remera of remeras) {
    alert("ID (" + remera.id + ") - " + remera.nombre);
}
for (const buzo of buzos) {
    alert("ID (" + buzo.id + ") - " + buzo.nombre);
}
for (const pantalon of pantalones) {
    alert("ID (" + pantalon.id + ") - " + pantalon.nombre);
}

//Solicito al usuario el ID de la prenda
let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const remeraBuscada = remeras.find(remera => remera.id === prendaSeleccionada);
const buzoBuscado = buzos.find(buzo => buzo.id == prendaSeleccionada);
const pantalonBuscado = pantalones.find(pantalon => pantalon.id == prendaSeleccionada);

if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada <=4) {
    alert("Seleccionaste " +  remeraBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (prendaSeleccionada <=7) {
    alert("Seleccionaste " + buzoBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (prendaSeleccionada <= 9) {
    alert("Seleccionaste " + pantalonBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID valido");
}