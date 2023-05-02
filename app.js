import ProductManager from './ProductManager.js'
import express from 'express'

const app = express()
const PORT = 8080

const pm = new ProductManager()
pm.getProducts()
pm.addProduct({ nombre: "Yerba Playadito", price: 1200 })
pm.addProduct({ nombre: "Yerba Mañanita", price: 900 })
const getProds = await pm.getProducts()
console.log(getProds);

export const server = app.listen(PORT , (req, res) => {
    console.log(`Todo listo vamos, puerto ${PORT}`);
})