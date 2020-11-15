function mostrarDatos(){
    let datosUsuario = JSON.parse(localStorage.getItem('listadoDeProductos'));
    

    for (let i = 0; i<datosUsuario.length; i++){
            //Trabajamos con tablas

            //Crear tr (Producto)
            let datosProducto = document.createElement("tr");
            document.querySelector("#contenido").appendChild(datosProducto);
            datosProducto.id = `producto-${i+1}`;
            datosProducto.classList.add("producto");
            
                let numero = document.createElement("th");
                let nombre = document.createElement("th");
                let cantidad = document.createElement("th");
                let precio = document.createElement("th");
                let borrar = document.createElement("button");
                borrar.type = "button";
                borrar.innerText = "X";
                // borrar.style.textAlign = "center";
                borrar.className = `btn btn-eliminar`;
                borrar.classList.add("border-white");
                borrar.classList.add("btn-eliminar1");
                borrar.id = i+1;
                


                document.querySelector(`#producto-${i+1}`).appendChild(numero);
                document.querySelector(`#producto-${i+1}`).appendChild(nombre);
                document.querySelector(`#producto-${i+1}`).appendChild(cantidad);
                document.querySelector(`#producto-${i+1}`).appendChild(precio);
                document.querySelector(`#producto-${i+1}`).appendChild(borrar);

                numero.innerText = i+1;
                nombre.innerText = datosUsuario[i].nombre;
                cantidad.innerText = datosUsuario[i].cantidad;
                precio.innerText = datosUsuario[i].precio;            
        }  
}

mostrarDatos(); 


function borrarItem(){
    //Eliminar el item de la array (listaDeProductos que está en el LG) y también eliminar el tr correcto.

    //1) Traer la array del LG, quitar el ítem en cuestión (ver de hacerlo con SPLICE(empieza, Q items)) y volver a subir la array al LG sobreescribiendo la array con el elemento removido.
    // El id del tr es la siguiente formula: #producto-${numero}.
    //El numero del id NO coincide con el index de la array: la fórmula debe ser ${numero-1}. EJ: el 1er item de la array es INDEX 0 y su id es #producto-1 (y no index 0). Por ende, el index debería ser [i-1];
    //2) removeChild()
    // EJ: list.removeChild(list.childNodes[0]);
    const arrayBI = JSON.parse(localStorage.getItem('listadoDeProductos'));
    //arrayBI.splice();
    const $todosLosProductos = document.querySelectorAll('.producto');
    const $todosLosBotonesE = document.querySelectorAll('.btn-eliminar');
    for (let i = 0; i < $todosLosProductos.length; i++) {
        $todosLosBotonesE[i].onclick = function(){
            //id del tr
            const idDelDato = (document.querySelectorAll('.producto')[i].id);
            const finIdDato = parseInt(idDelDato.slice(9,idDelDato.length));

            //id del boton eliminar:
            const idBtnElminar = parseInt($todosLosBotonesE[i].id);

            //eliminar ID:
            if (finIdDato === idBtnElminar){
                //Agarro a la tabla (el padre) y remuevo el producto[i];
                document.querySelector("#contenido").removeChild($todosLosProductos[i]);

                //Eliminar item de la array y volver a subir al LG:
                arrayBI.splice(i,1);
                //COMO PRUEBA, subo arrayBI como "pruebaListadoProductos". Si arranca, luego intentar subirlo reemplazando la array original "listadoDeProductos";
                localStorage.setItem("listadoDeProductos", JSON.stringify(arrayBI));
            }

            location.reload();
        }
        
    }

}


function borrarTodo(){
    //Previamente podríamos poner un ALERT o un CONFIRM para double-check si el user está seguro de que desea continuar con los cambios.
    const estaSeguro = confirm("¿Está seguro que desea continuar? Se borrará toda la lista y los productos guardados");

    //Vaciar la array listadoDeProductos y eliminar todos los tr de la tabla;
    if (estaSeguro) {
        const listadoAVaciar = JSON.parse(localStorage.getItem('listadoDeProductos'));
        listadoAVaciar.splice(0,listadoAVaciar.length);
        localStorage.setItem("listadoDeProductos", JSON.stringify(listadoAVaciar));

    
        const $todosLosProductos = document.querySelectorAll('.producto');
        $todosLosProductos.forEach(element => document.querySelector("#contenido").removeChild(element));   
    }
}
let btn_borrarTodo = document.querySelector("#borrarLocalStorage");
btn_borrarTodo.addEventListener("click", borrarTodo);