import mongoose from "mongoose";

const Schema = mongoose.Schema

const LeavenSchema = new Schema({
        title: String,
        leavenPower: {
                min: { type: Number },
                max: { type: Number }
        },
        initialWeight: Number,
        leavenConcentration: String,
        dateOfManufacture: String,
        dateOfPacketOpen: String
})

const Leaven = mongoose.models.Leaven || mongoose.model('Leaven', LeavenSchema)

export default Leaven