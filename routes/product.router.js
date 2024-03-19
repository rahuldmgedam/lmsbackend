const express = require("express")
const { handleproductCreate, handleproductGet } = require("../controller/product.controller")

const ProductRouter = express.Router()

ProductRouter.post("/create", handleproductCreate)
ProductRouter.get("/", handleproductGet)

module.exports = {
    ProductRouter
}