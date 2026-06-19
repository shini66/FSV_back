import mongoose from "mongoose";
import { type } from "node:os";

const productSchema = new mongoose.Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type:String, default:""},
    createdAt: {type:Date, default: Date.now}
});

export const Product = mongoose.model("Product", productSchema);