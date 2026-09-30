import "dotenv/config";
import express from "express";
import productsRouter from "./routes/products.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/products", productsRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
