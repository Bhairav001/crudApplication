const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://bhairav:bhairav@cluster0.egntrzq.mongodb.net/mongodb")
module.exports={
    connection
}