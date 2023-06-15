import cartModel from "./models/cart.model.js";

export class CartManager {
  async createCart() {
    try {
      return await cartModel.create({ products: [] });
    } catch (err) {
      console.error(`Error en createCart: ${err}`);
      return [];
    }
  }

  async getCartById(cartId) {
    try {
      return await cartModel.findById(cartId);
    } catch (err) {
      console.error(`Error en getCartById: ${err}`);
      return [];
    }
  }

  async addProductToCart(cartId, productId, quantity) {
    try {
      const cart = await cartModel.findById(cartId);
      const product = cart.products.find((e) => e._id === productId);

      if (!product) {
        cart.products.push({ _id: productId, quantity: quantity });
        await cart.save();
        return { message: "Producto agregado al carrito", cart };
      } else {
        return { message: "El producto ya existe en el carrito", product };
      }
    } catch (err) {
      console.error(`Error en addProductToCart: ${err}`);
      return []
    }
  }
}
