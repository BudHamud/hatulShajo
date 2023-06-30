import productModel from "./models/product.model.js";

class ProductManager {
  async addProduct(product) {
    try {
      const newProduct = await productModel.create({
        status: true,
        ...product,
      });
      return newProduct;
    } catch (error) {
      console.error(`Error agregado /products: ${error}`);
      return null;
    }
  }

  async getProducts(search, filter, page = 1, limit = 10) {
    try {
      const sort = filter === "asc" ? "asc" : "desc";
      const options = {
        sort: { price: sort },
        limit: Number(limit),
        page: Number(page)
      };

      const searchQuery = { name: { $regex: search, $options: "i" } };

      const searchResults = await productModel.paginate(searchQuery, options);
      return searchResults;
    } catch (error) {
      console.error(`Error obteniendo /products: ${error}`);
      return [];
    }
  }

  async getProductById(id) {
    try {
      const product = await productModel.findById(id);
      return product;
    } catch (err) {
      console.error(`Error obteniendo /productId: ${err}`);
      return [];
    }
  }

  async updateProduct(id, updatedFields) {
    return await productModel.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });
  }

  async deleteProduct(id) {
    return await productModel.findByIdAndDelete(id);
  }
}

export default ProductManager;
