import { Router } from "express";
import {
  createProductController,
  getAllProductsController,
} from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.post("/", createProductController);

productsRouter.get("/", getAllProductsController);

productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get product with ID: ${id}`);
});

productsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Update product with ID: ${id}`);
});

productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Delete product with ID: ${id}`);
});

export default productsRouter;
