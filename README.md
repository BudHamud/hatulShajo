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