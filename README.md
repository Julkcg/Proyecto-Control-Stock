# Proyecto-Control-Stock - STOCKEATE
Trabajo integrador grupal del tramo Front-end de PDTC

## Programa pensado para la **cargar de datos a un listado de inventario con interfaz de login**.

### Herramientas/Pseudo-leguajes y lenguaje utilizados:
1. HTML
2. CSS y Bootstrap (incluye la librerías jQuery y Popper de Javascript)
3. Javascript

### Marco general de uso
**HTML**
* Si bien se usan varias etiquetas necesarias para crear un html funcional, el énfasis en éste proyecto está puesto fundamentalmente al interior de las etiquetas <form> y todos sus hijos (inputs, labels, buttons, span, etc).
* Utilizamos una table para mostrar los datos de carga de productos.

**CSS y Bootstrap**
* La mayor parte del códgio html está estilizado con componentes y clases de Bootstrap.
* También se crea un css/style.css para terminar de dar forma a ciertas pantallas (como el index.html), así como también para retocar estilos y crear clases funcionales al DOM -desde JS-, tales como la clase "oculto" o "error-texto") o id como "#esExito".

**JAVASCRIPT**
* Aplicamos los conceptos del DOM para manejar datos de los <form>(HTML) desde JS.
* Utilizamos el local storage como emulación de una base de datos donde el usuario alojará datos referentes tanto a los productos cargados, como los usuarios creados para loguearse exitosamente e ingresar a la matriz del inventario.
* Se *intenta* organizar el código en un marco/paradigma funcional. 


### Estructura interna del programa/aplicación
El programa se divide en dos partes principales: la landing page, donde el usuario podrá ir a inicar sesion y/o registrarse a través de sus respectivos botones, y la matriz del inventario, donde el usuario, una vez logueado, podrá manipular los datos del inventario a su antojo: agregar productos, verlos por pantalla, eliminar items a discreción (eligiendo uno a uno) o a indiscreción (eliminando todos a la vez).

#### 1. Landing page e interfaz de log-in
Index.html es la página de **bienvenida** a STOCKEATE donde el usuario tendrá dos caminos posibles: iniciar sesión o registrarse.

* Iniciar Sesion: tal como explica su nombre, acá el usuario podrá loguearse. En caso que no haya ningún usuario creado -en el local storage- y el usuario intente loguearse a pesar de ésto, será automáticamente redirigido a la pagina de registro. En caso que ya haya completado éste paso, iniciar sesión posee algunas *validaciones simples* hechas harcodeado con vainilla JS y algunas expresiones en jQuery (más que nada, supliendo el comando document.querySelector). Para más información, mirar la sección *### ESTRUCTURA DE CONTROL* del readme.md.
*El código que controla ésta dinámica se aloja en validaciónYRegistro.js.*

* Registro: en ésta pantalla, el usuario podrá crearse un usuario en base a una cuenta de e-mail. Para ello, ingresará esa cuenta y luego creará un password. En ésta parte habrá **dos validaciones** principales:
    1. Que el dato ingresado en el campo mail contenga una estructura acorde a la estructura de un email.
    2. Que las constraseñas coincidan (*no hay mínimo o máximo de caracteres ni validaciones alfanuméricas*).
Finalmente, una vez registrado, el usuario será automáticamente redirigido a la página de inicio de sesión, previo mensaje de aviso que el registro fue exitoso, para que ingrese los datos del usuario creado para acceder a la matriz/interfaz del inventario. Asimismo, ese dato será guardado en el local storage (como objeto, dentro de una array llamada *ALLUSERS*, en el local storage).
*El código que controla ésta dinámica se aloja en registro.js.*


#### 2. Matriz/Interfaz de inventario
Fundamentalmente contenida en agregarProductos.html (para la carga de productos) y productos.html(para la visualización del listado de productos), ésta parte del programa estuvo fundamentalmente diseñada funcionalmente en los archivos funciones.js y mostrarProductos.js.

* Carga de productos: una vez que el usuario se ha registrado y logueado exitosamente, el usuario ingresará a agregarProductos.html donde encontrará una simple interfaz que presenta un formulario con 3 campos a completar con los valores que el prodcuto exige (el nombre, la cantidad y el precio). Completados los campos, será necesario oprimir el botón "Agregar Productos" para que el dato/producto sea guardado (como objeto, dentro de una array llamada *listadoDeProductos*, en el local storage).
Asimismo, el usuario cuenta con la posibilidad de chequear el listado de productos en todo momento, oprimiento el botón "Ver Lista". 
*El código que controla ésta dinámica se aloja en funciones.js.*

* Listado/Inventario: si el usuario hace click en "Ver Lista", podrá observar el listado/tabla de productos que hastá el momento hubiere sido ingresado. El mismo está ingresado dentro de una tabla con los mismos campos de los datos del producto (nombre, cantidad y precio) más el N° de ítem, que está representada en la primer columna de la tabla y un botón "X" en la última columna.
Desde ésta pantalla, el usuario tiene la posibilidad de:

    * Observar los datos ingresados y chequear que estén correctamente ingresados.
    * Si observa que alguna línea de la tabla (producto) tiene algún campo mal ingresado (ya sea el nombre, el precio o la cantidad), podrá eliminar el ítem presionando el botón "X" que se encuentra en la última celda de la fila correspondiente. Ésto actualizará automáticamente el N° de item de todos los otros productos restantes.
    * También tiene la posibilidad de eliminar todos los datos (productos) ingreados oprimiendo el botón "Eliminar Todo" luego de confirmar la alerta disparada.

//FALTA: Seguir completando

### Estructura de control
En ésta sección hablaremos principalmente de dos archivos de control: *siLogin.js* y *cerrarSesion.js*.

Además de *ALLUSERS* y *listadoDeProductos*, hay una tercer key alojada en el local storage.
Esta key, llamada *LOGIN* -cuyo valor es el booleano **true**) se guarda en el local storage cuando el usuario ingresa su usuario -mail- y contraseña de manera exitosa (se crea desde el archivo *validacionYRegistro.js*).

Ésta key trabaja desde el archivo "siLogin.js"; basicamente, mientras el usuario *está logueado* (es decir, mientras la key LOGIN: true existe), si el usuario intenta manualmente volver al index.html (landing page), al login.html o al registro.html (escribiendolo manualmente en la ruta del navegador o con la flecha de *atras/volver*), el script lo impide (redirigiendole a la pagina actual), siendo la única manera de volver atras oprimiendo el boton "Cerrar sesion" (ver archivo *cerrarSesion.js*) alojado en el navbar de las paginas agregarProducto.html y productos.html.



**(Cabe aclarar que si el usuario es experimentado en la programación y en el uso de la consola, muchas de éstas operaciones pueden ser fácilmente ejecutadas desde la consola).**

Por cualquier duda, contactanos.

Colaboradores y sus repositorios:
## Joaquin Perrier: https://github.com/JoaquinPerrier
## Julian Cano: https://github.com/Julkcg
## Diego Gándara: https://github.com/DiegoNG90






