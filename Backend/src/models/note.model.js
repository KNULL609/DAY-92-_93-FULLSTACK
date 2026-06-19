const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    title : String,
    description : String,
})

const noteModel = mongoose.model("notes", noteSchema)   
// mongoose.model("CollectionName", SchemaName)

module.exports = noteModel