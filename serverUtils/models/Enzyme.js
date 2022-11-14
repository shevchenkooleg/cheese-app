import mongoose from "mongoose";

const Schema = mongoose.Schema

const EnzymeSchema = new Schema({
    title: String,
    enzymePowerMin: Number,
    enzymePowerMax: Number,
    initialWeight: Number,
    bestBeforeDate: String,
    dateOfPacketOpen: String
})

const Enzyme = mongoose.models.Enzyme || mongoose.model('Enzyme', EnzymeSchema)

export default Enzyme