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
- Ruta '/products':
    + POST '/': Agrega un producto pasado por body.
    + PUT '/:pid': Actualiza el producto pasado por params.
    + DELETE ':pid': Borra el producto pasado por params.
- Ruta 'carts':
    + POST '/': Crea un carrito
    + GET '/:cid': Busca el carrito pasado por params
    + POST '/:cid/product/:pid': 'Agrega el producto (pid) al carrito (cid), ambos pasados por params.