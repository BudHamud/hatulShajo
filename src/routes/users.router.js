import { Router } from "express";
import UserManager from "../dao/UserManager.js";

const router = new Router();
const um = new UserManager();

router.post("/register", async (req, res) => {
  try {
    const userData = await um.createUser(req.body);
    req.session.username = userData.username
    res.status(200).redirect('/');
  } catch (err) {
    console.error('Error en register', err);
    res.status(500).render('errors/error', { error: "Error interno del servidor" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await um.findUser(req.body);
    req.session.username = userData.username
    if (userData) {
      res.status(200).redirect('/');
    } else {
      res.status(404).render('errors/error', { error: "La contraseña o el usuario no son correctos", to: '/login' });
    }
  } catch (err) {
    console.error('Error en login', err);
    res.status(500).render('errors/error', { error: "Error interno del servidor" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.json({ error: err });
      } else {
        res.redirect('/login')
      }
    });
  } catch (error) {
    console.error('Error en logout', error);
    res.status(500).json({ error: 'Error al destruir la sesión' });
  }
});

export default router;
