import cors from 'cors'
import express from 'express'
import configureWebSockets from './websockets.js'
import { __dirname, hbsConfig, sessionConfig } from './utils.js'
import config from './config/config.js';

import apiProds from './routes/products.router.js'
import apiCarts from './routes/carts.router.js'
import apiUsers from './routes/users.router.js'
import views from './routes/views.router.js'

// import './config/cloudinary.js';
import './config/dbConfig.js'
const app = express()

app.use(cors())
app.use(express.json());
app.use(sessionConfig)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.engine('hbs', hbsConfig);
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");


// Implementacion de Router
app.use('/', views)
app.use('/api/products', apiProds)
app.use('/api/carts', apiCarts)
app.use('/api/users', apiUsers)

const PORT =config.port

const server = app.listen(PORT , (req, res) => {
  console.log(`Todo listo vamos, puerto ${PORT}`);
})

configureWebSockets(server);