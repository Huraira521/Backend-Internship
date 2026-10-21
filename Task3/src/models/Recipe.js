import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        required: true,
        min: 1
    },
    cookTime: {
        type: Number,
        required: true,
        min: 1
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true
    }

})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe;