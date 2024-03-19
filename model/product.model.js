const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    product:{type:String, required:true},
    location:{type:String, required:true},
    
})

const ProductModel = mongoose.model("project", ProjectSchema);
module.exports  = {
    ProductModel
}