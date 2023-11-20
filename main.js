const Producto = function(nombre,precio,stock){       
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let usuario = true;
while (usuario) {
    let nombredeusuario = prompt("Ingrese su nombre de usuario para iniciar sesión");
    if (nombredeusuario != "") {
        alert("Hola " + nombredeusuario + " ya ingresaste a ALISADOSMETH!");
        alert("Hacenos tu pedido, recordá que si supera los 5 bidones tenes un descuento!")
        usuario = false;
    } else {
        alert("El usuario ingresado es incorrecto");
    }
}

function calcularPrecioTotalYAplicarDescuento(cantidadArticulos) {
    let precioPorArticulo = 5000;
    let precioTotal = cantidadArticulos * precioPorArticulo;
    let descuento = 2000;
    alert("El descuento total es: $" + descuento);
    return precioTotal - descuento;
}

let datos = true;

while (datos) {
    let ingresodebidones = parseFloat(prompt("Ingrese la cantidad de bidones"));
    if (!isNaN(ingresodebidones)) {
        if (ingresodebidones >= 5) {
            let precioFinal = calcularPrecioTotalYAplicarDescuento(ingresodebidones);
            alert("Precio original (sin descuento): $" + (precioFinal + 2000) +
                "\nPrecio con descuento: $" + precioFinal);
        } else {
            alert("Precio original (sin descuento): $" + (ingresodebidones * 5000) +
                "\nNo se aplicó descuento.");
        }
    } else {
        alert("Ingrese una cantidad válida.");
    }
    datos = confirm("¿Desea ingresar otra cantidad?");
}

let producto1 = new Producto("mix", 5500, 20)
let producto2 = new Producto("deco", 7500, 20)
let producto3 = new Producto("sin formol", 3500, 35)

let lista = [producto1,producto2,producto3,]


function filtrarAlisados(){
    let palabraClave = prompt("ingresa el alisado que buscas").toUpperCase().trim()
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))


    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("error el producto no existe " + palabraClave)
        let respuesta= confirm("lo queres agregar?")

        if(respuesta == true ){
            agregarNuevoProducto()
        }
    }
}

function agregarNuevoProducto(){

    let nombre = prompt("ingresa el nombre del producto")
    let precio = parseFloat(prompt("ingresa el precio del producto")) 
    let stock = parseInt(prompt("ingresa el stock del producto"))


    if(isNaN(precio) || isNaN(stock) || nombre===""){
        alert("por favor ingresa valores validos")
        return
    }

    let producto = new Producto(nombre,precio,stock)

    lista.push(producto)
    console.table(lista)


}