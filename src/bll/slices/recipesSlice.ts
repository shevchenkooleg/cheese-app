import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CreateRecipeParamsType, DBRecipeObjectType, RecipeType} from "../types";
import {cheeseAPI} from "../../api/cheese-api";
import axios from "axios";
import { resetRecipe } from "./newRecipeSlice";


export const getAllRecipe = createAsyncThunk('recipe/getAllRecipes', async () => {
    try {
        const res = await cheeseAPI.getAllRecipe()
        console.log(res.data)
        return {data: res.data}
    } catch (error) {
        if (axios.isAxiosError(error) && error) {
            console.log({...error});
        }
    }
})

export const createRecipe = createAsyncThunk('recipe/createRecipe', async (params: CreateRecipeParamsType, thunkAPI) => {
    try {
        const res = await cheeseAPI.createRecipe(params)
        console.log(res)
        thunkAPI.dispatch(getAllRecipe())
        thunkAPI.dispatch(resetRecipe())
    } catch (error) {
        if (axios.isAxiosError(error) && error) {
            console.log({...error});
        }
    }
})

export const deleteRecipe = createAsyncThunk('recipe/deleteRecipe', async (param: {recipeId: string}, thunkAPI) =>{
    try {
        const res = await cheeseAPI.deleteRecipe(param.recipeId)
        console.log(res)
        return {deletedRecipe: param.recipeId}
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(null)
    }
})


type InitialStateType = {
    recipes: Array<RecipeType>
}

const initialState: InitialStateType = {
    recipes: [] as RecipeType[]
}

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllRecipe.fulfilled, (state, action) => {
            if (action.payload) {
                state.recipes = []
                const recipes = action.payload.data.recipes
                console.log(recipes)
                recipes.forEach((r: DBRecipeObjectType) =>{
                    const recipe = JSON.parse(r.recipe)
                    recipe.id = r._id
                    console.log(recipe)
                    state.recipes.push(recipe)
                })
            }
        })
        builder.addCase(deleteRecipe.fulfilled, (state, action) => {
            if (action.payload) {
                console.log(action.payload.deletedRecipe)
                state.recipes = state.recipes.filter(r=>r.id !== action.payload.deletedRecipe)
            }
        })
    }
})


export default recipesSlice.reducer