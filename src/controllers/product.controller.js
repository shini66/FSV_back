import * as productService from "../services/product.service.js";

const getAllProducts = async (req, res, next) => {
    try {
        const Products = await productService.getServiceAllProducts();
        res.status(200).json(Products);
    } catch (error) {
        next(error);
    }
};

const createProduct = async (req, res, next) => {
    try {
        const ProductData = req.body;
        const newProduct = await productService.createServiceProduct(ProductData);
        res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const ProductId = req.params.id;
        const Product = await productService.getServiceProductById(ProductId);
        if (!Product) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(Product);
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const ProductId = req.params.id;
        const ProductData = req.body;
        const updatedProduct = await productService.updateServiceProduct(ProductId, ProductData);
        if (!updatedProduct) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const ProductId = req.params.id;
        const deletedProduct = await productService.deleteServiceProduct(ProductId);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        next(error);
    }
};

export {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
};