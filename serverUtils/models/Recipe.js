import mongoose from "mongoose";

const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    title: String,
    recipe: String
})

const Recipe = mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema)

export default Recipe