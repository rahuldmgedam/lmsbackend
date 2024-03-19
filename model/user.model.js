const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    projectName:{type:String, required:true},
    location:{type:String, required:true},
    city:{type:String, required:true},
    state:{type:String, required:true},
    projectType:{type:String, required:true},
    totalLandArea:{type:Number, required:true},
    totalSalableArea:{type:Number, required:true},
})

const addProjectModel = mongoose.model("addproject", Schema);
module.exports = addProjectModel;