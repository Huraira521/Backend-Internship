
const validateRecipe = (req, res, next) => {

const validDifficulties=["easy","medium","hard"];

    if (typeof req.body.name !== 'string' || req.body.name.trim() === "") {
        res.status(400).json({
            message: "Name is required and must be a non-empty string"
        })
        return;
    }

    if (typeof req.body.description !== 'string' || req.body.description.trim() === "") {
        res.status(400).json({
            message: "Description is required and must be non-empty string"
        })
        return;
    }

    if(typeof req.body.category!=="string"|| req.body.category.trim()===""){
        res.status(400).json({
            message:"Category is required and must be non-empty string "
        })
        return;
    }

    if(typeof req.body.prepTime!=="number" || req.body.prepTime<=0){
        res.status(400).json({
            message:"prepTime must be positive number"
        })
        return;
    }

    if(typeof req.body.cookTime!=="number" || req.body.cookTime<=0){
        res.status(400).json({
            message:"cookTime must be positive number"
        })
        return;
    }

    if(!validDifficulties.includes(req.body.difficulty)){
         res.status(400).json({
            message: "difficulty must be easy, medium, or hard"
        })
        return;
    }

    next();


}

export default validateRecipe;