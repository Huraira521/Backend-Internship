import express from 'express';
import recipes from './data/recipes.js';
import morgan from 'morgan';
import validateRecipe from './middleware/validateRecipe.js';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;


app.post('/recipes', validateRecipe, (req, res) => {
    let recipe = req.body
    recipe.id = Date.now();
    recipes.push(recipe);
    res.status(201).json(recipe)

})

app.get('/recipes', (req, res) => {
    res.status(200).json(recipes)
})

app.get('/recipes/:id', (req, res) => {
    const id = Number(req.params.id);
    const recipe = recipes.find(rec => rec.id === id);
    if (recipe) {
        console.log(recipe);
        res.status(200).json(recipe)
    }
    else {
        res.status(404).json({
            message: "Recipe not found"
        })
    }
})

app.put('/recipes/:id', validateRecipe, (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const index = recipes.findIndex(recipe => recipe.id === id)
    console.log(index);
    if (index !== -1) {
        const updatedRecipe = {
            ...body,
            id: id,
        }
        recipes[index] = updatedRecipe;
        res.status(200).json(updatedRecipe);
    }
    else {
        res.status(404).json({
            message: "Recipe not found"
        })
    }

})


app.delete('/recipes/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
        recipes.splice(index, 1);
        res.status(200).json({
            message: "Recipe deleted successfully"
        })
    }
    else {
        res.status(404).json({
            message: "Recipe not found"
        })
    }

})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on ${PORT}`);
})