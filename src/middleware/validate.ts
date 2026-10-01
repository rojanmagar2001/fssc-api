import { Request, Response, NextFunction } from "express";
import { createProductSchema } from "../schema/products.js";
import { ZodError } from "zod";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  try {
    createProductSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        message: "Invalid request body",
        errors: error.issues,
      });

      return;
    }

    res.status(500).json({
      message: "Internal server error",
    });
  }
};
