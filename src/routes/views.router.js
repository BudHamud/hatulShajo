import { Router } from "express";

const router = Router();

// Ruta para la vista home.hbs
router.get("/", async (req, res) => {
  res.render("home");
});

// Ruta para la vista realTimeProducts.hbs
router.get("/realtimeproducts", async (req, res) => {
  res.render("realTimeProducts");
});

// Ruta para la vista chat.hbs
router.get("/chat", async (req, res) => {
  res.render("chat");
});

export default router