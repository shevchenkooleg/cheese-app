import {CreateLeavenParamsType, CreateRecipeParamsType, DBRecipeObjectType, LeavenObjectType} from "../types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {cheeseAPI} from "../../api/cheese-api";
import axios from "axios";


export const getAllLeavens = createAsyncThunk('leaven/getAllLeavenObjects', async () => {
    try {
        const res = await cheeseAPI.getAllLeavenObjects()
        console.log(res.data)
        return {data: res.data}
    } catch (error) {
        if (axios.isAxiosError(error) && error) {
            console.log({...error});
        }
    }
})

export const createLeavenObject = createAsyncThunk('leaven/createLeavenObject', async (params: CreateLeavenParamsType) => {
    try {
        const res = await cheeseAPI.createLeavenObject(params)
        console.log(res)
        // thunkAPI.dispatch(getAllRecipe())
        // thunkAPI.dispatch(resetRecipe())
    } catch (error) {
        if (axios.isAxiosError(error) && error) {
            console.log({...error});
        }
    }
})


type InitialStateType = {
    leavens: Array<LeavenObjectType>
}
const initialState: InitialStateType = {
    leavens: [] as LeavenObjectType[]
}

export const leavensSlice = createSlice({
    name: 'leavens',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllLeavens.fulfilled, (state, action) => {
            if (action.payload) {
                state.leavens = action.payload.data.leavens
            }
        })
        // builder.addCase(deleteRecipe.fulfilled, (state, action) => {
        //     if (action.payload) {
        //         console.log(action.payload.deletedRecipe)
        //         state.recipes = state.recipes.filter(r=>r.id !== action.payload.deletedRecipe)
        //     }
        // })
    }
})


export default leavensSlice.reducer