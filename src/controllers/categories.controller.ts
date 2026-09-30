import { Request, Response } from "express";
import { categorySchema } from "../schema/category.js";
import db from "../libs/db.js";

export const getAllCategoriesController = async (
  req: Request,
  res: Response,
) => {
  try {
    res.status(200).json({
      message: "Categories retrieved successfully",
      data: [],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const parsedRes = categorySchema.safeParse(req.body);
    if (!parsedRes.success) {
      res.status(400).json({
        message: "Invalid request body",
      });
      return;
    }

    const newCategory = {
      name: parsedRes.data.name,
    };

    const createdCategory = db.category.create({
      data: newCategory,
    });

    res.status(201).json({
      message: "Category created successfully",
      data: createdCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
