import { Router } from "express";
import {
  createCategoryController,
  getAllCategoriesController,
} from "../controllers/categories.controller.js";
import { validate } from "../middleware/validate.js";
import { categorySchema } from "../schema/category.js";

const categoriesRouter = Router();

categoriesRouter.get("/", getAllCategoriesController);

categoriesRouter.post("/", validate(categorySchema), createCategoryController);

export default categoriesRouter;
