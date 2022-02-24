//Constructor de Objetos
class Producto{
    constructor (marca, nombre, modelo, id, precio , color, stock){
        this.marca = marca;
        this.nombre = nombre;
        this.modelo =modelo
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
    vender(cantidad){
        this.stock = this.stock - cantidad;
    }
}
//Categoria de Productos
const celulares = [];
const camaras = [];
const consolas = [];
const computacion = [];
const electronica = [];
const televisores = [];

//agrego la constante spaces para agregar espacios mas adelante en los alert
const spaces = "  ";

//stock
// celulares
celulares.push (new Producto ("Samsung", "Galaxy", "S21", 1, 124999, "blanco", 20));
celulares.push (new Producto ("Samsung", "Galaxy", "A03s", 2, 35000, "negro", 10));
celulares.push (new Producto ("Apple", "Iphone", "13 pro", 3, 395129, "oro", 5));
celulares.push (new Producto ("Motorola", "Edge", "20 lite", 4, 69999, "verde", 9));
celulares.push (new Producto ("Xiaomi", "Redmi Note", "10s dual", 5, 54999, "gris grafito", 30));

//camaras
camaras.push (new Producto ("Canon", "PowerShot", "sx540", 6, 74990, "negro", 12 ));
camaras.push (new Producto ("Nikon", "kit", "d7500", 7, 455791, "negro", 5 ));
camaras.push (new Producto ("Sony", "H300", "Compacta", 8, 69999, "negro", 18 ));
camaras.push (new Producto ("kodax", "Sport", "Sx540", 9, 6388, "azul/amarilla", 2));
camaras.push (new Producto ("Samsung", "St64", "Compacta", 10, 10999, "negro", 8 ));

//consolas
consolas.push ( new Producto ("Microsoft", "Xbox", "Serie S", 11, 89999, "blanca", 4));
consolas.push ( new Producto ("Nintendo", "Switch", "Oled", 12, 94499, "blanco y negro", 6));
consolas.push ( new Producto ("Sony", "Playstation", "5", 13, 207999, "blanco y negro", 3));

//computacion
computacion.push (new Producto ("Hp", "Notebook", "15-DW1080LA", 14, 62999, "negro", 5));
computacion.push (new Producto ("Exo", "Notebook", " Smart XL4-S3542", 15, 76999, "gris", 3));
computacion.push (new Producto ("Lenovo", "Notebook", " IdeaPad 15IML05", 16, 91999, "azul",6));
computacion.push (new Producto ("Dell", "Notebook", "Latitude 3190", 17, 38999, "negro",2));

//electronica
electronica.push (new Producto ("Sony", "Auriculares Inalámbricos", "Sony WH-CH510", 18, 4999, "negro", 7));
electronica.push (new Producto ("Philco", "Parlantev DJ Speakers", " DJP20 portátil", 19, 6149, "negro", 9));
electronica.push (new Producto ("Xiami", "Redmi AirDots", "In-ear", 20, 5899, "azul", 12));
electronica.push (new Producto (" ViewSonic", "Proyector", "Value PA503S", 21, 72999, "blanco y gris", 11));

//televisores
televisores.push (new Producto ("Philco", "Smart TV", "PLD32HS9A1 LED HD 32", 22, 30399, "negro", 15));
televisores.push (new Producto ("Samsung", "Smart TV", "Series 7 UN50TU7000GCZB LED 4K 50", 23, 83999, "negro", 11));
televisores.push (new Producto ("Rca", "Smart TV", "AND32Y LED HD 32", 24, 30499, "negro", 7));

//incluyo un ciclo for para exhibir mi productos 
for (const celular of celulares) {
    alert("ID (" + celular.id + ") - "+ celular.marca + spaces  + celular.nombre + spaces + celular.modelo + spaces + celular.color + spaces + "Precio" + spaces + celular.precio + spaces + "Disponibles" + spaces + celular.stock + spaces + "unidades" );
}
for (const camara of camaras){
    alert("ID (" + camara.id + ") - "+ camara.marca + spaces  + camara.nombre + spaces + camara.modelo + spaces + camara.color + spaces + "Precio" + spaces + camara.precio + spaces + "Disponibles" + spaces + camara.stock + spaces + "unidades" );
}
for (const consola of consolas){
    alert("ID (" + consola.id + ") - " + consola.marca + spaces  + consola.nombre + spaces + consola.modelo + spaces + consola.color + spaces + "Precio" + spaces + consola.precio + spaces + "Disponibles" + spaces + consola.stock + spaces + "unidades" );
}
for (const notebook of computacion){
    alert("ID (" + notebook.id + ") - "+ notebook.marca + spaces  + notebook.nombre + spaces + notebook.modelo + spaces + notebook.color + spaces + "Precio" + spaces + notebook.precio + spaces + "Disponibles" + spaces + notebook.stock + spaces + "unidades" );
}
for (const audio of electronica){
    alert("ID (" + audio.id + ") - "+ audio.marca + spaces  + audio.nombre + spaces + audio.modelo + spaces + audio.color + spaces + "Precio" + spaces + audio.precio + spaces + "Disponibles" + spaces + audio.stock + spaces + "unidades" );
}
for (const televisor of televisores){
    alert("ID (" + televisor.id + ") - "+ televisor.marca + spaces  + televisor.nombre + spaces + televisor.modelo + spaces + televisor.color + spaces + "Precio" + spaces + televisor.precio + spaces + "Disponibles" + spaces + televisor.stock + spaces + "unidades" );
}
// Calculo de precio o costo total 
function precioFinal (precioProducto, cantidadProducto, costoEnvio){
    return ((precioProducto * 1.21) * cantidadProducto + costoEnvio)
}
//selección de producto según el criterio del cliente 
let productoSeleccionado = parseInt( prompt("Por favor ingrese el número de ID del producto seleccionado"))
const celularSeleccionado = celulares.find( celular => celular.id === productoSeleccionado);
const camaraSeleccionado = camaras.find( camara => camara.id === productoSeleccionado);
const consolaSeleccionado = consolas.find( consola => consola.id === productoSeleccionado);
const notebookSeleccionado = computacion.find( notebook => notebook.id === productoSeleccionado);
const audioSeleccionado = electronica.find( audio =>audio.id === productoSeleccionado);
const televisorSeleccionado = televisores.find( televisor =>televisor.id === productoSeleccionado);

//Establecemos mediante variables la cantidad de productos y el costo de envió 
let cantidad = parseInt ( prompt("Ingrese la cantidad de unidades a comprar"));
const envio = 600; 

if (productoSeleccionado <= 0){
    alert("Ingresa un ID valido");
} else if(productoSeleccionado <= 5){
    alert( "El valor de su compra es por: $" + precioFinal(celularSeleccionado.precio, cantidad, envio) )
}else if(productoSeleccionado <= 10){
    alert( "El valor de su compra es por: $" + precioFinal(camaraSeleccionado.precio, cantidad, envio) )
}else if(productoSeleccionado <= 13){
    alert( "El valor de su compra es por: $" + precioFinal(consolaSeleccionado.precio, cantidad, envio) )
}else if(productoSeleccionado <= 17){
    alert( "El valor de su compra es por: $" + precioFinal(notebookSeleccionado.precio, cantidad, envio) )
}else if(productoSeleccionado <= 21){
    alert( "El valor de su compra es por: $" + precioFinal(audioSeleccionado.precio, cantidad, envio) )
}else if(productoSeleccionado <= 24){
    alert( "El valor de su compra es por: $" + precioFinal(televisorSeleccionado.precio, cantidad, envio))
}else{
    alert("Usted no ha ingresado ningún producto por favor intente nuevamente")
}







