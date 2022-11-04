import {combineReducers, configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";



export const rootReducer = combineReducers({
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type NullableType<T> = null | T


//@ts-ignore
window.store = store