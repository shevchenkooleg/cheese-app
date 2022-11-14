import {combineReducers, configureStore} from "@reduxjs/toolkit";
import recipesReducer from './slices/recipesSlice'
import testReducer from './slices/tetsSlice'
import newRecipeReducer from './slices/newRecipeSlice'
import leavensReducer from './slices/leavensSlice'
import enzymesReducer from './slices/enzymeSlice'


export const rootReducer = combineReducers({
    recipes: recipesReducer,
    tests: testReducer,
    newRecipe: newRecipeReducer,
    leavens: leavensReducer,
    enzymes: enzymesReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type NullableType<T> = null | T
