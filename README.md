Hatul Shajo is a backend project 🛒

### Enterga Clase 2:
- ProductManager (constructor → []): addProduct, getProducts, getProductById.

### Entrega Clase 4:
- ProductManager (constructor → this.path): updateProduct y deleteProduct.

### Entrega Clase 6:
- Implementacion de express y servidor con app.listen()
- Ruta '/products':
    + GET '/': query limit → muestra los productos hasta el limite que se le pase.
    + GET '/:pid': Muestra el producto con el id que se indique en el pid.

### Entrega Clase 8:
- CartManager (constructor → this.path): getCarts, saveCarts, generateCartId, createCart, getCartById, addProductToCart.
- Ruta 'api/products':
    + POST '/': Agrega un producto pasado por body.
    + PUT '/:pid': Actualiza el producto pasado por params.
    + DELETE ':pid': Borra el producto pasado por params.
- Ruta 'api/carts':
    + POST '/': Crea un carrito
    + GET '/:cid': Busca el carrito pasado por params
    + POST '/:cid/product/:pid': 'Agrega el producto (pid) al carrito (cid), ambos pasados por params.
- NUEVO: Solucionado el error de CartManager agregando mas quantity a un mismo producto.

### Entrega Clase 10:
- Todos los archivos excepto el README, los package.json y el .gitignore pasaron a estar en la carpeta /src.
- /config → Carpeta para la configuracion de bases de datos, Cludinary por ejemplo.
- /dao → Carpeta donde va a estar todos los models para mongo y managers, de momento solo fs.
- /db → Carpeta para las bases de datos, en este caso, los .json.
- /public → Carpeta estatica para la ruta './':
    + index.js aca va a estar el script de la vista realTimeProducts.hbs.
- /router '/' (views):
    + GET '/' render home.hbs
    + GET '/realTimeProducts' render realTimeProducts.hbs
- En /views estan las vistas home y realTimeProducts.hbs

### Entrega Clase 15:

- Agregada la configuración de MongoDB al home
- /config → Se agregó la configuracion de Mongo en dbConfig.js
- /dao → Creación de los Manager de Mongo y separación de fs.
- /router '/' (views):
    + GET '/chat' chat.hbs
- Ruta 'api/products': Cambios minimos para que funcione con Mongo.
- /views → se agregó chat.hbs
- websockets.js → Se agregaron funciones para funcionar con '/chat'

### Entrega Clase 17:

<b>TODO</b>

- /dao → En el ProductManager.js cambiar el return a un json funcional.
- /router '/api/carts':
    + DELETE '/:cid/products/:pid' → Elimina el producto con el pid seleccionado
    + DELETE 'api/carts/:cid' → Elimina el carrito con el cid seleccionado
    + PUT 'api/carts/:cid' → Elimina todos los productos del carrito
    + PUT 'api/carts/:cid/products/:pid' → Actualiza la cantidad del producto
- /router '/' (views):
    + '/products' → Mostrar los productos con paginacion.
    + '/carts/:cid' → Mostrar el carrito del usuario.

### Entrega Clase 19:

- /dao → Creacion de el UserManager.js y el user.model.js
- /router '/api/users':
    + POST '/register' →  Se crea un usuario a la base de datos y se guarda con "express-session"
    + POST 'login' → Acceso a la cuenta que hayas creado y se guarda el valor con "express-session"
    + POST 'logout' → Cierra la sesion con "express-session"
- /router '/' (views):
    + /auth/login → Vista para que el usuario inicie sesión.
    + /auth/register → Vista para que el usuario se registre.
    + /errors/error → Devuelve el error en caso de que algun dato no se haya cargado.

### Entrega Clase 21:

- utils.js → hasheo con bcrypt.js y configuracion de passport
- '/api/users':
    + POST '/github' →  Iniciar sesion o crear cuenta con github en caso de no haberla creado.
    + POST '/register' →  Implementar bcrypt.
    + POST 'login' → Implementar bcrypt.