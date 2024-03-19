const { ProductModel } = require("../model/product.model")

const handleproductCreate = async(req,res) => {

    const data = new ProductModel(req.body);
try {
    console.log("create product call")
   
   await data.save();
    res.send({msg:"product is created"})
     
} catch (error) {
  console.log(error)  
}

}

const handleproductGet = async(req,res) => {
    // logic
    try {
        console.log("get product call")
        const data = await ProductModel.find()
        res.send(data) 
    } catch (error) {
      console.log(error)  
    }

}

module.exports = {
    handleproductCreate,handleproductGet
}