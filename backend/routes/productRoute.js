import express from "express";
import { addProduct } from "../controllers/productController";

const productRouter = express.Router()

productRouter.post("/product",addProduct)

export default productRouter;