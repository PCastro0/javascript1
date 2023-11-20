function filtrarProductos() {
    let palabraClave = prompt("ingresa el producto que buscas").toUpperCase().trim();
    let resultado = lista.filter((x) => x.nombre.toUpperCase().includes(palabraClave));


    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        alert("no se encontro el producto " + palabraClave);
        let respuesta = confirm("lo queres agregar?");

        if (respuesta == true) {
            agregarProducto();
        }
    }
}
