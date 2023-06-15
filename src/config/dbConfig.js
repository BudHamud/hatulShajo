import mongoose from 'mongoose'
import config from './config.js'

mongoose.set("strictQuery", true);
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => console.log(err.reason));