const express = require("express")
const router = express.Router()

const {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
} = require("../controllers/product.controller")

router
    .route("/")
    .get(getProducts)
    .post(createProduct)
    
router
    .route("/:id")
    .delete(deleteProduct)
    .patch(updateProduct)

module.exports = router;