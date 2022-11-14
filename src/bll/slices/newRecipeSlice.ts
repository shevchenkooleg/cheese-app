import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {
    AgingType,
    CoupsType,
    CuttingType,
    DryingType,
    KneadingType, LayoutType,
    MainInformationType,
    PasteurizationType,
    RecipeType,
    RipeningType, SaltingType, SecondHeatingType, SpicesType, StorageType
} from "../types"


type initialStateType = RecipeType

const initialState: initialStateType = {
    mainInformation: {},
    pasteurization: {},
    ripening: {},
    cutting: {},
    kneading: {},
    secondHeating: {},
    spices: {},
    layout: {},
    coups: {},
    salting: {},
    drying: {},
    aging: {},
    storage: {},
} as RecipeType


// const initialState = {
//     id: '1',
//     mainInformation: {
//         title: 'Качотта',
//         cookingTime: 4,
//         initialData: {
//             milkType: ['Коровье', 'Козье', 'Смесь'],
//             milkPH: {min: 6.6, max: 6.7},
//             protein: {min: 3.2, max: 3.4},
//             fat: {min: 3.6, max: 4.0},
//         },
//     },
//     pasteurization: {
//         pasteurizationTemperature: 72,
//         pasteurizationTime: 15,
//         coolingTemperature: {min: 36, max: 37},
//         milkPH: {min: 6.4, max: 6.5},
//     },
//     ripening: {
//         leaven: {
//             title: ['Biochem SLB 10U'],
//             time: {min: 30, max: 40},
//         },
//         enzyme: {
//             title: ['Hansen NATUREN Premium Plus 1400NB'],
//             clotting: {temperature: 36, k: 1.5},
//         },
//     },
//     cutting: {
//         size: {width: 1, long: 1},
//         type: 'нарезка венчиком',
//
//     },
//     kneading: {
//         time: 15
//     },
//     secondHeating: {
//         heatingTemperature: {min: 38.5, max: 39.5},
//         heatingTime: {min: 10, max: 15}
//     },
//     spices:{
//         type: ["розмарин", "лук-шалот", "итальянские травы", "перец", "сухой чеснок", "пажитник"],
//         weight: {
//             total: 0.2,
//             option: '% от веса будущего сыра',
//         },
//         additionally: 'Сухие травы обработать в микроволновке на 20 секунд'
//     },
//     layout: {
//         type: ['выкладка наливом с сывороткой через формы (ковш)','насыпью без сыворотки (сито)'],
//         milkPH: {min: 6.4, max: 6.3},
//     },
//     coups:{
//         first: 1,
//         restCount: 6,
//         restTime: {min: 30, max: 40},
//         totalTime: {min: 180, max: 300},
//         drainageType: 'самопрессование',
//         milkPH: {min: 5.2, max: 5.3},
//         finallyTime: {min: 6, max: 8},
//         finalAction: 'Убрать в формах в холод',
//         finallyTemperature: {min: 8, max: 12}
//     },
//     salting:{
//         saltingType: 'По-сухому',
//         dry:{
//             totalWeight: {min: 20, max: 22},
//             saltingTime: 24
//         },
//         wet:{
//             concentration: 20,
//             brinePH: {min: 5.2, max: 5.3},
//             saltingTime: 24
//         },
//     },
//     drying:{
//         dryingTime: {min: 12, max: 24},
//         dryingTemperature: {min: 10, max: 12},
//         dryingHumidity: {min: 75, max: 80},
//     },
//     aging: {
//         agingTime: {min: 30, max: 60},
//         agingTemperature: {min: 10, max: 12},
//         agingHumidity: {min: 85, max: 90},
//         care: 'Переворот каждый день. При нарастании естественной плесени - чистить полумягкой сухой щеткой'
//     },
//     storage:{
//         storageTemperature: {min: 2, max: 5},
//     }
// }

export const newRecipeSlice = createSlice({
    name: 'newRecipe',
    initialState,
    reducers: {
        setMainInformation(state, action: PayloadAction<{ newRecipe: MainInformationType}>) {
            state.mainInformation = action.payload.newRecipe
        },
        setPasteurization(state, action: PayloadAction<{pasteurization: PasteurizationType}>) {
            state.pasteurization = action.payload.pasteurization
        },
        setRipening(state, action: PayloadAction<{ripening: RipeningType}>) {
            state.ripening = action.payload.ripening
        },
        setCutting(state, action: PayloadAction<{cutting: {cutting: CuttingType, kneading: KneadingType, secondHeating: SecondHeatingType | null}}>) {
            state.cutting = action.payload.cutting.cutting
            state.kneading = action.payload.cutting.kneading
            state.secondHeating = action.payload.cutting.secondHeating
        },
        setKneading(state, action: PayloadAction<{kneading: KneadingType}>) {
            state.kneading = action.payload.kneading
        },
        setSecondHeating(state, action: PayloadAction<{secondHeating: SecondHeatingType}>) {
            state.secondHeating = action.payload.secondHeating
        },
        setSpicesAC(state, action: PayloadAction<{spices: SpicesType | null}>) {
            state.spices = action.payload.spices
        },
        setLayout(state, action: PayloadAction<{layout: LayoutType}>) {
            state.layout = action.payload.layout
        },
        setCoups(state, action: PayloadAction<{coups: CoupsType}>) {
            state.coups = action.payload.coups
        },
        setSalting(state, action: PayloadAction<{salting: SaltingType}>) {
            state.salting = action.payload.salting
        },
        setDrying(state, action: PayloadAction<{drying: DryingType}>) {
            state.drying = action.payload.drying
        },
        setAging(state, action: PayloadAction<{aging: AgingType}>) {
            state.aging = action.payload.aging
        },
        setStorage(state, action: PayloadAction<{storage: StorageType}>) {
            state.storage = action.payload.storage
        },
    },
})

export const {setMainInformation, setPasteurization, setRipening, setCutting, setKneading, setSecondHeating, setSpicesAC,
    setLayout, setCoups, setSalting, setDrying, setAging, setStorage} = newRecipeSlice.actions

export default newRecipeSlice.reducer