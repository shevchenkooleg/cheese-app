import mongoose from "mongoose";

const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    recipes: {
        mainInformation: {
            id: Number,
            title: String,
            cookingTime: Number,
            ripeningTime: Number,
            initialData: {
                milkType: [String],
                milkPH: {min: Number, max: Number},
                protein: {min: Number, max: Number},
                fat: {min: Number, max: Number},
            },
        },
        pasteurization: {
            pasteurizationTemperature: Number,
            pasteurizationTime: Number,
            coolingTemperature: {min: Number, max: Number},
            milkPH: {min: Number, max: Number},
        },
        ripening: {
            leaven: {
                title: String,
                value: {min: Number, max: Number},
                time: {min: Number, max: Number},
            },
            enzyme: {
                title: String,
                value: {min: Number, max: Number},
                clotting: {time: Number, temperature: Number, k: Number},
            },
        },
        cutting: {
            size: {width: Number, long: Number},
            type: [String],

        },
        kneading: {
            time: Number
        },
        secondHeating: {
            heatingTemperature: {min: Number, max: Number},
            heatingTime: {min: Number, max: Number}
        },
        spices:{
            type: [String],
            weight: {
                total: Number,
                option: String,
            },
            additionally: [String],
        },
        layout: {
            type: [String],
            milkPH: {min: Number, max: Number},
        },
        coups:{
            first: Number,
            restCount: Number,
            restTime: {min: Number, max: Number},
            totalTime: {min: Number, max: Number},
            drainageType: String,
            milkPH: {min: Number, max: Number},
            finallyTime: {min: Number, max: Number},
            finalAction: String,
            finallyTemperature: {min: Number, max: Number},
        },
        salting:{
            dry:{
                totalWeight: {min: Number, max: Number},
                saltingTime: Number,
            },
            wet:{
                concentration: Number,
                brinePH: {min: Number, max: Number},
                saltingTime: Number,
            },
        },
        drying:{
            dryingTime: {min: Number, max: Number},
            dryingTemperature: {min: Number, max: Number},
            dryingHumidity: {min: Number, max: Number},
        },
        aging: {
            agingTime: {min: Number, max: Number},
            agingTemperature: {min: Number, max: Number},
            agingHumidity: {min: Number, max: Number},
            care: [String]
        },
        storage:{
            storageTemperature: {min: Number, max: Number},
        }
    }
})

const Test = mongoose.models.Test || mongoose.model('Recipe', RecipeSchema)

export default Test