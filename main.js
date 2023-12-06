const Producto = function(nombre,precio){       
    this.nombre = nombre
    this.precio = precio
}
let usuario=true;
//agrego los objetos a la lista
let producto1 = new Producto("Mix", 5000)
let producto2 = new Producto("Deco", 6000)
let producto3 = new Producto("Sin Formol", 3000)
let lista = [producto1,producto2,producto3]
//si se encuentra algo en local va a la lista
if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista = lista //sino , sigue igual 
}
//agrego función para que se filtren los productos que tengo en la lista
function filtrarProductos(){
    const body = document.querySelector("body") 
    const input = document.getElementById("buscarAlisados").value 
    const palabraClave = input.trim().toUpperCase() 
    const resultado = lista.filter(  (producto)=> producto.nombre.toUpperCase().includes(palabraClave))
//si hay resultados lo muestro con una card, lo almaceno y le agrego una clase para agregar el css
    if(resultado.length > 0){  

        const container = document.createElement("div")  
        container.classList.add("container")  

        resultado.forEach( (producto)=>{ 
            const card = document.createElement("div")

        const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${producto.nombre}`
        card.appendChild(nombre)  

        const precio = document.createElement("p")
        precio.textContent = `precio: ${producto.precio}`
        card.appendChild(precio)
        container.appendChild(card)  
        })
        body.appendChild(container) 

    }else{
        alert("no hay coincidencias")
    }
}
//sino esta el producto se lo puede sumar con la siguiente funcion, coloco formulario
function agregarProducto(){

    const form = document.createElement("form")  
    form.innerHTML=`
    <label for="nombre-input">Nombre:</label>
    <input id= "nombre-input" type="text" step="0.01" required>
    
    <label for="precio-input">Precio:</label>
    <input id= "precio-input" type="number" step="0.01" required>
    <button type="submit">Agregar</button>
    `

    form.addEventListener("submit", function (e){ 
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const precioInput = parseFloat(document.getElementById("precio-input").value)
        

        if(isNaN(precioInput) || nombreInput === ""){
            alert("No se puede agregar producto")
            return
        }

        const producto = new Producto (nombreInput, precioInput, )
//si agrego algo que ya existe dejo alert
        if (lista.some( (elemento)=> elemento.nombre === producto.nombre)){ 
            alert("el producto ya se encuentra agregado")
            return
        }

        lista.push(producto) 

        localStorage.setItem("productos", JSON.stringify(lista))
        alert(`se agrego el producto ${producto.nombre} a la lista`)  

        const container =  document.createElement("div")
        
        lista.forEach((producto)=>{
            const card = document.createElement("div")

            const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${producto.nombre}`
        card.appendChild(nombre)

        const precio = document.createElement("p")
        precio.textContent = `precio: ${producto.precio}`
        card.appendChild(precio)
        container.appendChild(card)
        })

        const body = document.querySelector("body")
        body.appendChild(container) 

        form.reset()  

    })

    const body = document.querySelector("body")
    body.appendChild(form)
}
//agrego las botonerasde html para css
const buscar = document.getElementById("filtrar")
buscar.classList.add("button") 
buscar.addEventListener("click", filtrarProductos)


const sumar = document.getElementById("agregarProducto")
sumar.addEventListener("click",agregarProducto)


