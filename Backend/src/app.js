
// server ko create 

const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require("path")


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))


//POST  

app.post('https://day-92-93-fullstack.onrender.com/api/notes', async (req,res)=>{
    const { title , description } = req.body

    const note = await noteModel.create({
        title, description
    })
    
    res.status(201).json({
        message : "note created successfully",
        note
    })
})


//GET 

app.get("https://day-92-93-fullstack.onrender.com/api/notes", async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message : "Notes fetched successfully.",
        notes
    })
})

// DELETE

app.delete("https://day-92-93-fullstack.onrender.com/api/notes/:id", async(req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully."
    })
})

// PATCH

app.patch("https://day-92-93-fullstack.onrender.com/api/notes/:id", async(req,res)=>{
    const id = req.params.id
    const { description } = req.body

    await noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message : "Note updated successfully."
    })
})

    // app.use('*name', (req, res) => {
    //         res.sendFile(path.join(__dirname,"/public/index.html"))
    // })


module.exports = app