import userRoutes from "./user.routes.js";
import productRoutes from "./product.routes.js"
import { Router } from "express";

const allRoutes = Router();

allRoutes.use("/users", userRoutes);
allRoutes.use("/products", productRoutes);

export default allRoutes;