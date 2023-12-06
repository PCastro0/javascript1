const Producto = function(nombre,precio){       
    this.nombre = nombre
    this.precio = precio
}
let usuario=true;

let producto1 = new Producto("Mix", 5000)
let producto2 = new Producto("Deco", 6000)
let producto3 = new Producto("Sin Formol", 3000)
let lista = [producto1,producto2,producto3]
if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista = lista  
}
function filtrarProductos(){
    const body = document.querySelector("body") 
    const input = document.getElementById("buscarAlisados").value 
    const palabraClave = input.trim().toUpperCase() 
    const resultado = lista.filter(  (producto)=> producto.nombre.toUpperCase().includes(palabraClave))

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

const buscar = document.getElementById("filtrar")
buscar.classList.add("button") 
buscar.addEventListener("click", filtrarProductos)


const sumar = document.getElementById("agregarProducto")
sumar.addEventListener("click",agregarProducto)


