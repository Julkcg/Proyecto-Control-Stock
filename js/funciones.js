//Funciones de Producto, AgregarProducto

// let userArray = [];
let listadoDeProductos = [];
listadoDeProductos = JSON.parse(localStorage.getItem("listadoDeProductos"));
console.log(listadoDeProductos);


function guardarDatos(e){
    e.preventDefault();
    let campoNombre1 = document.querySelector("#nombre");
    let campoCantidad1 = document.querySelector("#cantidad");
    let campoPrecio1 = document.querySelector("#precio");
    if (campoNombre1.value==="" || campoCantidad1.value===""|| campoPrecio1.value===""){
        alert("Favor de completar todos los campos")
    }else{

        const producto = {
            nombre: campoNombre1.value,
            cantidad: campoCantidad1.value,
            precio: campoPrecio1.value
        }
    
    
    
    
    let existente = localStorage.getItem("listadoDeProductos")
        if (existente === null){
            existente = [];
            existente.push(producto);
            let listadoDeProductos = localStorage.setItem("listadoDeProductos", JSON.stringify(existente))
        }else{
            let listadoDeProductos = existente;
            listadoDeProductos = JSON.parse(listadoDeProductos);
            listadoDeProductos.push(producto);
            localStorage.setItem("listadoDeProductos", JSON.stringify(listadoDeProductos));
        }
        campoNombre1.value = "";
        campoCantidad1.value = "";
        campoPrecio1.value = "";
    }
    campoNombre1.focus();
}


let btn_guardar = document.querySelector("#guardarProducto")
btn_guardar.addEventListener("click", guardarDatos)
