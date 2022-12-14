

// SEGUNDA ENTREGA



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









