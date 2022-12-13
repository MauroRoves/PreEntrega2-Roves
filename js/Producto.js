/* class Producto {                                       ----1
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIVA() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
 */



/* class Producto {                                            //----2
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIVA() {
        return this.precio * 1.21;
    }
    vender() {
        return this.vendido = true;
    }
} */