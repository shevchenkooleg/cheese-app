import mongoose from "mongoose";

const Schema = mongoose.Schema

const TestSchema = new Schema({
        title: String,
        recipe: String
    }
)

const Test = mongoose.models.Test || mongoose.model('Test', TestSchema)

export default Test