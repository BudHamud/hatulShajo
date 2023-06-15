import productModel from './models/product.model.js'

class ProductManager {

  async addProduct(product) {
    try {
      const newProduct = await productModel.create({ status: true, ...product })
      return newProduct
    } catch (error) {
      console.error(`Error agregado /products: ${error}`);
      return null;
    }
  }

  async getProducts(limit) {
    try {
      let query = productModel.find();
    
      if (limit) {
        query = query.limit(limit);
      }
    
      return await query.exec();
    } catch (error) {
      console.error(`Error obteniendo /products: ${error}`);
      return [];
    }
  }

  async getProductById(id) {
    try {
      const product = await productModel.findById(id)
      return product
    } catch (err) {
      console.error(`Error obteniendo /productId: ${err}`);
      return [];
    }
  }

  async updateProduct(id, updatedFields) {
    return await productModel.findByIdAndUpdate(id, updatedFields, { new: true });
  }

  async deleteProduct(id) {
    return await productModel.findByIdAndDelete(id);
  }
}

export default ProductManager;