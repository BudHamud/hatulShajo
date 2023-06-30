import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  products: [productSchema],
});

const cartModel = mongoose.model('carts', cartSchema);

export default cartModel;