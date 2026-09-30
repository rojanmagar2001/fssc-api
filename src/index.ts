import "dotenv/config";
import express from "express";
import productsRouter from "./routes/products.route.js";
import { checkConnection } from "./libs/db.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/products", productsRouter);

checkConnection();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
