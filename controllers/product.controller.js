const productModel = require("../models/product.model")

module.exports = {
    getProducts: async(req, res) => {
        const product = await productModel.find()
        return res.json(product);
    },
    createProduct: async(req, res)=>{
        const body = req.body
        const newProduct = await productModel.create(body)
        return res.json(newProduct)
    },
    deleteProduct: async(req,res)=>{
        const id = req.params.id
        const deletedProduct = await productModel.findByIdAndDelete(id);
        return res.json(deletedProduct);
    },
    updateProduct: async(req, res)=>{
        const id = req.params.id
        const body = req.body
        const updatedProduct = await productModel.findByIdAndUpdate(id, body, {new: true})
        return res.json(updatedProduct)
    }
}