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
    if (!Number(ingresodebidones)) {
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



