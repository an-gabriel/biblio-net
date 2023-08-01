import mongoose from "mongoose";

const bookStockSchema = new mongoose.Schema(
    {
        id: { type: String },
        book: { type: mongoose.Schema.Types.ObjectId, ref: 'books', required: true },
        quantity: { type: Number, required: true }
    }
);

const booksStock = mongoose.model('booksStock', bookStockSchema);

export default booksStock 