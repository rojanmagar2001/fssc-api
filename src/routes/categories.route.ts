import { Router } from "express";
import {
  createCategoryController,
  getAllCategoriesController,
} from "../controllers/categories.controller.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategoriesController);

categoriesRouter.post("/", createCategoryController);

export default categoriesRouter;
