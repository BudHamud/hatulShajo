import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  // first_name: {
  //   type: String,
  //   required: true,
  // },
  // last_name: {
  //   type: String,
  // },
  // age: {
  //   type: Number,
  //   required: true,
  //   default: 0
  // },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    default: null,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'premium'],
    default: "user",
  },
  // photo: {
  //   type: String,
  //   default: 'https://i.imgur.com/avx2DwE.jpg'
  // },
  // isGithub: {
  //   type: Boolean,
  //   required: true,
  //   default: false
  // },
  // userToken: {
  //   type: String
  // },
  // documents: [
  //   {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     reference: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
