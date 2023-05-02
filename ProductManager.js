import fs from "fs/promises";

export default class ProductManager {
  constructor() {
    this.products = [];
  }

  async getProducts() {
    try {
      // const read = await fs.readFile(this.products, "utf-8");
      // return JSON.parse(read);
      return this.products
    } catch (err) {
      console.log(err);
    }
  }

  async addProduct(obj) {
    try {
      const prods = await this.getProducts();
      const foundCode = prods.find(e => e.code === obj.code)
      console.log(!!foundCode);
      if (obj.title === ''&& obj.description === ''&& obj.price === ''&& obj.thumbnail === ''&& obj.code === ''&& obj.stock === '') {
        return console.log('Uno de los campos no fue agregado');
      }
      if (foundCode) {
        return console.log("Codigo repetido");
      }
      prods.push({ id: prods.length + 1, ...obj });
      return console.log(obj);
      // await fs.writeFile(
      //   this.products,
      //   JSON.stringify(prods, null, 2),
      //   "utf-8"
      // );

    } catch (err) {
      console.log(err);
    }
  }

  async getProductById(id) {
    const prods = this.getProducts();
    const isHere = prods.find((e) => e.id === id);
    if (isHere) {
      console.log(isHere);
    } else {
      console.log("Not found, no encontrado");
    }
  }
}
