import { dirname } from "path";
import { fileURLToPath } from "url";
import handlebars from "express-handlebars";
import session from 'express-session'
import config from "./config/config.js";
// import multer from "multer";

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const hbsConfig = handlebars.engine({
  extname: "hbs",
  defaultLayout: false,
  layoutsDir: "views/layouts/",
});

export const sessionConfig = session({
  secret: config.secretKey,
  resave: false,
  saveUninitialized: false
})

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads"); // Directorio donde se guardarán las imágenes
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const extension = file.mimetype.split("/")[1];
//     cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`); // Nombre del archivo
//   },
// });

// export const upload = multer({ dest: 'src/uploads/' });
