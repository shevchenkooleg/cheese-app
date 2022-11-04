import {createSlice} from "@reduxjs/toolkit";
import {RecipeType} from "../types";

type initialStateType = {
    recipes: Array<RecipeType>
}

const initialState: initialStateType = {
    recipes: [{
        mainInformation: {
            title: 'Качотта',
            cookingTime: 4,
            ripeningTime: 30,
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
                title: 'Biochem SLB 10U',
                value: {min: 1000, max: 1500},
                time: {min: 30, max: 40},
            },
            enzyme: {
                title: 'Hansen NATUREN Premium Plus 1400NB',
                value: {min: 100, max: 200},
                clotting: {time: 40, temperature: 36, k: 1.5},
            },
        },
        cutting: {
            size: {width: 1, long: 1},
            type: ['кукурузное зерно', 'нарезка венчиком'],

        },
        kneading: {
            time: 15
        },
        secondHeating: {
            heatingTemperature: {min: 38.5, max: 39.5},
            heatingTime: {min: 10, max: 15}
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
            milkPH: {min: 5.2, max: 5.3},
        }
    }, {
        mainInformation: {
            title: 'Моцарелла',
            cookingTime: 3,
            ripeningTime: 40,
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
                title: 'Biochem SLB 10U',
                value: {min: 1000, max: 1500},
                time: {min: 30, max: 40},
            },
            enzyme: {
                title: 'Hansen NATUREN Premium Plus 1400NB',
                value: {min: 100, max: 200},
                clotting: {time: 40, temperature: 36, k: 1.5},
            },
        },
        cutting: {
            size: {width: 1, long: 1},
            type: ['кукурузное зерно', 'нарезка венчиком'],

        },
        kneading: {
            time: 15
        },
        secondHeating: {
            heatingTemperature: {min: 38.5, max: 39.5},
            heatingTime: {min: 10, max: 15}
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
            milkPH: {min: 5.2, max: 5.3},
        }
    }]
}

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {}
})


export default librarySlice.reducer