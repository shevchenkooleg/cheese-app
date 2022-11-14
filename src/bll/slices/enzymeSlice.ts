import {CreateEnzymeParamsType,EnzymeObjectType} from "../types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {cheeseAPI} from "../../api/cheese-api";
import axios from "axios";


export const getAllEnzymes = createAsyncThunk('enzyme/getAllEnzymesObjects', async () => {
    try {
        const res = await cheeseAPI.getAllEnzymeObjects()
        console.log(res.data.enzyme)
        return {data: res.data}
    } catch (error) {
        if (axios.isAxiosError(error) && error) {
            console.log({...error});
        }
    }
})

export const createEnzymeObject = createAsyncThunk('enzyme/createEnzymeObject', async (params: CreateEnzymeParamsType, thunkAPI) => {
    try {
        const res = await cheeseAPI.createEnzymeObject(params)
        console.log(res)
    } catch (error) {
        if (axios.isAxiosError(error) && error) {
            console.log({...error});
        }
    }
})


type InitialStateType = {
    enzymes: Array<EnzymeObjectType>
}
const initialState: InitialStateType = {
    enzymes: [] as EnzymeObjectType[]
}

export const enzymesSlice = createSlice({
    name: 'enzymes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllEnzymes.fulfilled, (state, action) => {
            if (action.payload) {
                state.enzymes = action.payload.data.enzyme
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


export default enzymesSlice.reducer