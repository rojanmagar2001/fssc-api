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
  const postBody = req.body;

  const newProduct = {
    id: products.length + 1,
    name: postBody.name,
    price: postBody.price,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct,
  });
};
