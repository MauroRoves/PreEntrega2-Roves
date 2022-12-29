
// SEGUNDA ENTREGA

<<<<<<< HEAD
/* 

 
=======
  
  class Producto {
    constructor(nombre, precio, dimensiones, tecnica, numero) {
        this.nombre = nombre;
        this.precio = precio;
        this.dimensiones = dimensiones;
        this.tecnica = tecnica;
        this.numero = numero;
        }
    }
    

const a4 = [];
const a3 = [];
const unOctavoWatman = [];
<<<<<<< HEAD

a4.push( new Producto ("Torre de Pisa", 10, "A4", "Fibra", 1));
a4.push( new Producto ("Puente Vasco da Gama", 20, "A4", "Fibra", 2));

a3.push( new Producto ("Patron sobre lienzo", 30, "A3", "Oleo sobre lienzo", 3));
a3.push( new Producto ("Patron con anomalia", 15, "A3", "Acrilico", 4));

unOctavoWatman.push( new Producto ("Baños Termales - Viaje de Chihiro", 20, "1/8 Watman", "Fibra", 5));
unOctavoWatman.push( new Producto ("Torre Eiffel", 10, "1/8 Watman", "Fibra", 6));



alert("Retratos:" + "\n" + "\n" + "Torre de pisa - A4 - Fibra - 10 USD - Numero 1" + "\n" + "Puente Vasco da Gama - A4 - Fibra - 20 USD - Numero 2" + "\n" + "\n" +"Patron sobre lienzo - A3 - Oleo sobre lienzo - 30 USD - Numero 3" + "\n" + "Patron con anomalia - A3 - Acrilico - 15 USD - Numero 4" + "\n" + "\n" + "Viaje de Chihiro - 1/8 Watman - Fibra - 20 USD - Numero 5 " + "\n" + "Torre Eiffel - 1/8 Watman - Fibra - 15 USD - Numero 6");

let laminaElegida = prompt("Ingresar numero de la Lamina a Comprar");
let agradecer = "\n" + "Gracias por tu compra"
 */
/* 

 if (laminaElegida == 1) {
    alert("El precio de tu retrato es 10 USD" + agradecer);
    console.log("Has comprado `Torre de Pizza` ");
} else if (laminaElegida == 2) {
    alert("El precio de tu retrato es 20 USD" + agradecer);
    console.log("Has comprado `Puente Vasco da Gama` ");
} else if (laminaElegida == 3) {
    alert("El precio de tu retrato es 30 USD" + agradecer);
    console.log("Has comprado `Patron sobre lienzo` ");
} else if (laminaElegida == 4) {
    alert("El precio de tu retrato es 15 USD" + agradecer);
    console.log("Has comprado `Patron con anomalia` ");
} else if (laminaElegida == 5) {
    alert("El precio de tu retrato es 20 USD" + agradecer);
    console.log("Has comprado `Baños Termales` ");
} else if (laminaElegida == 6) {
    alert("El precio de tu retrato es 10 USD" + agradecer);
    console.log("Has comprado `Torre Eiffel` ");
} else { 
    alert("Ingrese un numero del 1 al 6")
}   */
















































=======

a4.push( new Producto ("Torre de Pisa", 10 , "A4", "Fibra", 1));
a4.push( new Producto ("Puente Vasco da Gama", 20, "A4", "Fibra", 2));

a3.push( new Producto ("Patron sobre lienzo", 30, "A3", "Oleo sobre lienzo", 3));
a3.push( new Producto ("Patron con anomalia", 15, "A3", "Acrilico", 4));

unOctavoWatman.push( new Producto ("Baños Termales - Viaje de Chihiro", 20, "1/8 Watman", "Fibra", 5));
unOctavoWatman.push( new Producto ("Torre Eiffel", 10, "1/8 Watman", "Fibra", 6));



alert("Retratos:" + "\n" + "\n" + "Torre de pisa - A4 - Fibra - 10 USD - Numero 1" + "\n" + "Puente Vasco da Gama - A4 - Fibra - 20 USD - Numero 2" + "\n" + "\n" +"Patron sobre lienzo - A3 - Oleo sobre lienzo - 30 USD - Numero 3" + "\n" + "Patron con anomalia - A3 - Acrilico - 15 USD - Numero 4" + "\n" + "\n" + "Viaje de Chihiro - 1/8 Watman - Fibra - 20 USD - Numero 5 " + "\n" + "Torre Eiffel - 1/8 Watman - Fibra - 15 USD - Numero 6");






let laminaElegida = parseInt(prompt("Ingrese el numero de lamina a Comprar"));



const a4Elegido = a4.find((el) => el.numero === laminaElegida);                                              
const a3Elegido = a3.find((el) => el.numero === laminaElegida);                                                         
const unOctavoWatmanElegido = unOctavoWatman.find((el) => el.numero === laminaElegida); 
const encuadre = [2, 3, 5]


if (laminaElegida <= 2) {
    alert("El precio de tu retrato es " + (a4Elegido.precio + encuadre[0]) + " USD");
    alert("Muchas Gracias");
} else if (laminaElegida <= 4) {
    alert("El precio de tu retrato es " + (a3Elegido.precio + encuadre[2]) + " USD");
    alert("Muchas Gracias");
} else if (laminaElegida <= 6){
    alert("El precio de tu retrato es " + (unOctavoWatmanElegido.precio + encuadre[1]) + " USD");
    alert("Muchas Gracias");
} else  
    alert("Ingrese un numero del 1 al 6");















>>>>>>> nueva-rama














