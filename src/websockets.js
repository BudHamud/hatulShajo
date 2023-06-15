import { Server } from "socket.io";
// import cloudinary from 'cloudinary'
import ProductManager from "./dao/ProductManager.js";
import messageModel from "./dao/models/message.model.js";

const productManager = new ProductManager();

const configureWebSockets = (server) => {
  const io = new Server(server);

  // Configurar eventos de Socket.io
  io.on("connection", (socket) => {
    console.log("New client connected");

    // Evento para emitir la lista de productos actualizada a los clientes
    const emitProductList = async () => {
      const products = await productManager.getProducts();
      socket.emit("productList", products);
    };

    const emitMessageList = async () => {
      const messages = await messageModel.find()
      socket.emit("message", messages);
    };

    // Emitir la lista de productos y mesanjes al cliente recién conectado
    emitProductList();
    emitMessageList();

    // Escuchar el evento de creación de un nuevo producto
    socket.on("createProduct", async (productData) => {
      try {
        // const { title, description, price, code, stock, category } =
        // productData;

        // Subir la imagen a Cloudinary
        // const result = await cloudinary.v2.uploader.upload(thumbnail);

        // Obtener el enlace de la imagen de Cloudinary
        // const thumbnailUrl = result.secure_url;

        await productManager.addProduct(productData);
        emitProductList();
      } catch (error) {
        console.error("Error creando el producto:", error);
      }
    });

    // Escuchar el evento de eliminación de un producto
    socket.on("deleteProduct", async (productId) => {
      await productManager.deleteProduct(productId);
      emitProductList();
    });

    // Enviar mensaje desde hbs
    socket.on("sendMessage", async (messageData) => {
      try {
        const { user, message } = messageData;
        const newMessage = await messageModel({ user, message });
        await newMessage.save();
        emitMessageList();
      } catch (error) {
        console.error("Error enviando el mensaje:", error);
      }
    });

    // Manejar la desconexión del cliente
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

export default configureWebSockets;
