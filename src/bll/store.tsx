import {combineReducers, configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import libraryReducer from '../bll/slices/librarySlice'
import testReducer from '../bll/slices/tetsSlice'


export const rootReducer = combineReducers({
    library: libraryReducer,
    tests: testReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type NullableType<T> = null | T
