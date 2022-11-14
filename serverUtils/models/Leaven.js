import mongoose from "mongoose";

const Schema = mongoose.Schema

const LeavenSchema = new Schema({
        title: String,
        leavenPowerMin: Number,
        leavenPowerMax: Number,
        initialWeight: Number,
        leavenConcentration: String,
        dateOfManufacture: String,
        dateOfPacketOpen: String
})

const Leaven = mongoose.models.Leaven || mongoose.model('Leaven', LeavenSchema)

export default Leaven