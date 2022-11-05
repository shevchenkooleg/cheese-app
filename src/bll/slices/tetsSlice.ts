import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {cheeseAPI} from "../../api/cheese-api";
import axios from "axios";

type TestNoteType = {
    title: string
}

type TestSliceType = {
    notes: Array<TestNoteType>
}

export const getTestNotes = createAsyncThunk('test/getTestNotes', async ()=>{
    try {
        const res = await cheeseAPI.getTestNotes()
        console.log(JSON.parse(res.data.testNotes[0].recipe))
    } catch (error) {
        if (axios.isAxiosError(error) && error) {
            console.log({...error});
        }
    }
})

export const createTestNote = createAsyncThunk('test/createTestNote', async (params: TestParamsType)=> {
    try {
        const res = await cheeseAPI.createTestNote(params)
        console.log(res)
    } catch (error) {
        if (axios.isAxiosError(error) && error) {
            console.log({...error});
        }
    }
})


const initialState = {} as TestSliceType

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers:{}
})

export default testSlice.reducer
// export type titleType = {
//     first: String,
// }

export type TestParamsType = {
    title: string
    recipe: string
}