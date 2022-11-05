import axios from 'axios'
import {TestParamsType} from "../bll/slices/tetsSlice";

enum BASE_URLS {
    LOCAL = 'http://localhost:3000',
    // HEROKU = 'https://simple-notes-back.herokuapp.com/'
}

const instance = axios.create({
    baseURL: BASE_URLS.LOCAL,
    withCredentials: true
})

export const cheeseAPI = {
    //for Notes
    getTestNotes() {
        return instance.get(`api/test`);
    },
    getNote(id: string) {
        return instance.get(`api/notes/${id}`);
    },
    createTestNote(params: TestParamsType) {
        console.log(params)
        return instance.post('api/test', params);
    },
    deleteNote(id: string) {
        return instance.delete(`api/notes/${id}`);
    },
    updateNote(id: string, title?: string, note_text?: string, color?: string, note_mode?: NoteViewType, pinned?:boolean) {
        return instance.put(`api/notes/${id}`, {
            title,
            note_text,
            color,
            note_mode,
            pinned,
        });
    },
    dndNotes(newNotesArr: NoteTextType[]){
        return instance.put('api/notes', {notes: newNotesArr})
    }
}
//for Auth
export const authAPI = {
    me() {
        return instance.get('api/auth/me')
    },
    register(email: string, password: string, country?: string, username?: string) {
        return instance.post(`api/register`, {email, password, country, username})
    },
    // login(email: string, password: string) {
    //     return instance.post(`auth/login`, {email, password})
    // },

}

//for User

export const userAPI = {
    getUser(){
        return instance.get(`user`)
    },
    updateUser(username?: string, email?: string, country?: string) {
        return instance.put(`api/user`, {username,  country})
    }

}

// Types

export type ResponseType<D = {}> = {
    status: number
    messages: Array<string>
    data: D
}

// U S E R

export type UserType = {
    _id: string,
    username?: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt?: Date
    settings?: SettingsType,
    country?: string
    image: string
}
export type SettingsType = {
    darkmode?: boolean,
    themecolor?: string,
}

// N O T E S

export type NoteTodoType = {
    id: number,
    note_mode: NoteViewType
    title: string | null,
    todos: Array<TaskType | null>
    dateOfCreate: Date,
    color: string
}
export type NoteTextType = {
    _id: string,
    note_mode?: NoteViewType
    title?: string,
    note_text?: string,
    createdAt?: Date,
    color: ColorSamplesType,
    user?: string
    pinned: boolean
}
export type TaskType = {
    idTask: string,
    taskTitle: string,
    isDone: boolean
}
export type NoteViewType = 'note_text' | 'note_todo'
export type ColorSamplesType =
    "blue"
    | "green"
    | "violet"
    | "mustard"
    | "dark"
    | "default"

