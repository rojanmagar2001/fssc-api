import { Request, Response } from "express";
import products from "../data/index.js";
import { createProductSchema } from "../schema/products.js";

export const getAllProductsController = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Products retrieved successfully",
    data: products,
  });
};

export const createProductController = async (req: Request, res: Response) => {
  console.log("Request body:", req.body);

  const parsedRes = createProductSchema.safeParse(req.body);
  if (!parsedRes.success) {
    res.status(400).json({
      message: "Invalid request body",
    });
    return;
  }

  const newProduct = {
    id: products.length + 1,
    name: parsedRes.data.name,
    price: parsedRes.data.price,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct,
  });
};
