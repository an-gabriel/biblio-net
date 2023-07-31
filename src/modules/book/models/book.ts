import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

const books = mongoose.model('books', bookSchema);

export default books