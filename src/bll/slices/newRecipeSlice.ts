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
        resetRecipe(state){
            return state = {
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
        }
    },
})

export const {setMainInformation, setPasteurization, setRipening, setCutting, setKneading, setSecondHeating, setSpicesAC,
    setLayout, setCoups, setSalting, setDrying, setAging, setStorage, resetRecipe} = newRecipeSlice.actions

export default newRecipeSlice.reducer