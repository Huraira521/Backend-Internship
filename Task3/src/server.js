import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'

import Recipe from './models/Recipe.js'
import validateRecipe from './middleware/validateRecipe.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;



// CREATE
app.post('/recipes', validateRecipe, async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body)
        res.status(201).json(recipe)
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to create recipe"
        })
    }
})




// GET ALL
app.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.status(200).json(recipes)
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to fetch recipes"
        })
    }

})




// GET BY ID
app.get('/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(200).json(recipe)
    }
    catch (err) {
        res.status(404).json({
            message: "Recipe not found"
        })
    }
})



// UPDATE
app.put('/recipes/:id', validateRecipe, async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(200).json(recipe)
    }
    catch (err) {
        res.status(404).json({
            message: "Recipe not found"
        })
    }
})



// DELETE
app.delete('/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id)
        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            })
        }
        res.status(200).json({
            message: "Recipe deleted successfully"
        })
    }
    catch (err) {
        res.status(404).json({
            message: "Recipe not found"
        })
    }
})


// DATABASE CONNECTION

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connection successfully");
        // Server Start
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message)
    })