import {createSlice} from "@reduxjs/toolkit";
import {RecipeType} from "../types";

type initialStateType = {
    recipes: Array<RecipeType>
}

const initialState: initialStateType = {
    recipes: [{
        id: '1',
        mainInformation: {
            title: 'Качотта',
            cookingTime: 4,
            initialData: {
                milkType: ['Коровье', 'Козье', 'Смесь'],
                milkPH: {min: 6.6, max: 6.7},
                protein: {min: 3.2, max: 3.4},
                fat: {min: 3.6, max: 4.0},
            },
        },
        pasteurization: {
            pasteurizationTemperature: 72,
            pasteurizationTime: 15,
            coolingTemperature: {min: 36, max: 37},
            milkPH: {min: 6.4, max: 6.5},
        },
        ripening: {
            leaven: {
                title: ['Biochem SLB 10U'],
                time: {min: 30, max: 40},
            },
            enzyme: {
                title: ['Hansen NATUREN Premium Plus 1400NB'],
                clotting: {temperature: 36, k: 1.5},
            },
        },
        cutting: {
            size: {width: 1, long: 1},
            type: 'нарезка венчиком',

        },
        kneading: {
            time: 15
        },
        secondHeating: {
            heatingTemperature: {min: 38.5, max: 39.5},
            heatingTime: {min: 10, max: 15}
        },
        spices:{
            type: ["розмарин", "лук-шалот", "итальянские травы", "перец", "сухой чеснок", "пажитник"],
            weight: {
                total: 0.2,
                option: '% от веса будущего сыра',
            },
            additionally: 'Сухие травы обработать в микроволновке на 20 секунд'
        },
        layout: {
            type: ['выкладка наливом с сывороткой через формы (ковш)','насыпью без сыворотки (сито)'],
            milkPH: {min: 6.4, max: 6.3},
        },
        coups:{
            first: 1,
            restCount: 6,
            restTime: {min: 30, max: 40},
            totalTime: {min: 180, max: 300},
            drainageType: 'самопрессование',
            milkPH: {min: 5.2, max: 5.3},
            finallyTime: {min: 6, max: 8},
            finalAction: 'Убрать в формах в холод',
            finallyTemperature: {min: 8, max: 12}
        },
        salting:{
            saltingType: 'По-сухому',
            dry:{
                totalWeight: {min: 20, max: 22},
                saltingTime: 24
            },
            wet:{
                concentration: 20,
                brinePH: {min: 5.2, max: 5.3},
                saltingTime: 24
            },
        },
        drying:{
            dryingTime: {min: 12, max: 24},
            dryingTemperature: {min: 10, max: 12},
            dryingHumidity: {min: 75, max: 80},
        },
        aging: {
            agingTime: {min: 30, max: 60},
            agingTemperature: {min: 10, max: 12},
            agingHumidity: {min: 85, max: 90},
            care: 'Переворот каждый день. При нарастании естественной плесени - чистить полумягкой сухой щеткой'
        },
        storage:{
            storageTemperature: {min: 2, max: 5},
        }
    }, {
        id: '2',
        mainInformation: {
            title: 'Моцарелла',
            cookingTime: 3,
            initialData: {
                milkType: ['Коровье'],
                milkPH: {min: 6.6, max: 6.7},
                protein: {min: 3.2, max: 3.4},
                fat: {min: 3.6, max: 4.0},
            },
        },
        pasteurization: {
            pasteurizationTemperature: 72,
            pasteurizationTime: 15,
            coolingTemperature: {min: 36, max: 37},
            milkPH: {min: 6.4, max: 6.5},
        },
        ripening: {
            leaven: {
                title: ['Biochem SLB 10U'],
                time: {min: 30, max: 40},
            },
            enzyme: {
                title: ['Hansen NATUREN Premium Plus 1400NB'],
                clotting: {temperature: 36, k: 1.5},
            },
        },
        cutting: {
            size: {width: 1, long: 1},
            type: 'кукурузное зерно',

        },
        kneading: {
            time: 15
        },
        secondHeating: {
            heatingTemperature: {min: 38.5, max: 39.5},
            heatingTime: {min: 10, max: 15}
        },
        spices:null,
        layout: {
            type: ['выкладка наливом с сывороткой через формы (ковш)','насыпью без сыворотки (сито)'],
            milkPH: {min: 6.4, max: 6.3},
        },
        coups:{
            first: 1,
            restCount: 6,
            restTime: {min: 30, max: 40},
            totalTime: {min: 180, max: 300},
            drainageType: 'искусственное прессование',
            milkPH: {min: 5.2, max: 5.3},
            finallyTime: {min: 6, max: 8},
            finalAction: 'Убрать в формах в холод',
            finallyTemperature: {min: 8, max: 12}
        },
        salting:{
            saltingType: 'По-сухому',
            dry:{
                totalWeight: {min: 20, max: 22},
                saltingTime: 24,
            },
            wet:{
                concentration: 20,
                brinePH: {min: 5.2, max: 5.3},
                saltingTime: 24,
            },
        },
        drying:{
            dryingTime: {min: 12, max: 24},
            dryingTemperature: {min: 10, max: 12},
            dryingHumidity: {min: 75, max: 80},
        },
        aging: {
            agingTime: {min: 30, max: 60},
            agingTemperature: {min: 10, max: 12},
            agingHumidity: {min: 85, max: 90},
            care: 'Переворот каждый день. При нарастании естественной плесени - чистить полумягкой сухой щеткой'
        },
        storage:{
            storageTemperature: {min: 2, max: 5},
        }
    }]
}

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {}
})


export default librarySlice.reducer