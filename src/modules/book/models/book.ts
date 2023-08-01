import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true },
        availableQuantity: { type: Number, required: true },
        detail: { type: String, required: true }
    }
);

const books = mongoose.model('books', bookSchema);

export default books 