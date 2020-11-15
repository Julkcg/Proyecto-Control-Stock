console.log("Cerrar sesión linkeado a productos.html y agregarProductos.html");

function cerrarSesion(){
    localStorage.removeItem('LOGIN');
    window.location.href = "index.html";
}
