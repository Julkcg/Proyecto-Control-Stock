let usuarioLogueado = localStorage.getItem('LOGIN');
//Si no está logueado, lo mando a login.html
if (usuarioLogueado) {
    window.location.href = "agregarProductos.html"
}