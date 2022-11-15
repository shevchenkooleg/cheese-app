import mongoose from "mongoose";

const Schema = mongoose.Schema

const TestSchema = new Schema({
        mainInformation: {
            id: { type: Number },
            title: { type: String},
            cookingTime: { type: Number },
            initialData: {
                milkType: { type: [String]},
                milkPH: {min: { type: Number }, max: { type: Number }},
                protein: {min: { type: Number }, max: { type: Number }},
                fat: {min: { type: Number }, max: { type: Number }},
            },
        },
        pasteurization: {
            pasteurizationTemperature: { type: Number },
            pasteurizationTime: { type: Number },
            coolingTemperature: {min: { type: Number }, max: { type: Number }},
            milkPH: {min: { type: Number }, max: { type: Number }},
        },
        ripening: {
            leaven: {
                title: { type: String },
                time: {min: { type: Number }, max: { type: Number }},
            },
            enzyme: {
                title: { type: String },
                clotting: {time: { type: Number }, temperature: { type: Number }, k: { type: Number }},
            },
        },
        cutting: {
            size: {width: { type: Number }, long: { type: Number }},
            type: { type: [String]},

        },
        kneading: {
            time: { type: Number }
        },
        secondHeating: {
            heatingTemperature: {min: { type: Number }, max: { type: Number }},
            heatingTime: {min: { type: Number }, max: { type: Number }}
        },
        spices:{
            type: { type: [String]},
            weight: {
                total: { type: Number },
                option: { type: String },
            },
            additionally: { type: [String]},
        },
        layout: {
            type: { type: [String]},
            milkPH: {min: { type: Number }, max: { type: Number }},
        },
        coups:{
            first: { type: Number },
            restCount: { type: Number },
            restTime: {min: { type: Number }, max: { type: Number }},
            totalTime: {min: { type: Number }, max: { type: Number }},
            drainageType: { type: String },
            milkPH: {min: { type: Number }, max: { type: Number }},
            finallyTime: {min: { type: Number }, max: { type: Number }},
            finalAction: { type: String },
            finallyTemperature: {min: { type: Number }, max: { type: Number }}
        },
        salting:{
            dry:{
                totalWeight: {min: { type: Number }, max: { type: Number }},
                saltingTime: { type: Number }
            },
            wet:{
                concentration: { type: Number },
                brinePH: {min: { type: Number }, max: { type: Number }},
                saltingTime: { type: Number }
            },
        },
        drying:{
            dryingTime: {min: { type: Number }, max: { type: Number }},
            dryingTemperature: {min: { type: Number }, max: { type: Number }},
            dryingHumidity: {min: { type: Number }, max: { type: Number }},
        },
        aging: {
            agingTime: {min: { type: Number }, max: { type: Number }},
            agingTemperature: {min: { type: Number }, max: { type: Number }},
            agingHumidity: {min: { type: Number }, max: { type: Number }},
            care: { type: [String]},
        },
        storage:{
            storageTemperature: {min: { type: Number }, max: { type: Number }},
        }
    }
)

const Test = mongoose.models.Test || mongoose.model('Test', TestSchema)

export default Test