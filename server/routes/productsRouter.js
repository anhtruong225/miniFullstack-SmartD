import express from "express";
import * as productController from "../controllers/products.js";

const productsRouter = express.Router();
productsRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addNewProduct);

productsRouter
  .route("/:id")
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

productsRouter.put("/:id/addTag", productController.addTagToCategory);
export default productsRouter;
