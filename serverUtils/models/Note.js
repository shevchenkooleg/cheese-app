import mongoose from "mongoose";
import User from "./User.js";

const Schema = mongoose.Schema

const NoteSchema = new Schema({
    title: {type: String},
    note_text: {type: String},
    color: {
        type: String,
        enum: [
            'default', 'dark', 'green', 'blue', 'mustard', 'violet'
        ],
        default: 'default'
    },
    note_mode: {type: String, enum: ['note_text', 'note_todo'], default: 'note_text'},
    createdAt: {type: Date, default: () => Date.toString(), immutable: true},
    user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    pinned: {type: Boolean, default: false}
})

const Note = mongoose.models.Note || mongoose.model('Note', NoteSchema)

export default Note