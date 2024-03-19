const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://rahulgedam95:rg19951997@cluster0.mkrcjf1.mongodb.net/lms?retryWrites=true&w=majority&appName=Cluster0")

module.exports = {
    connection
}