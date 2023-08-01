import mongoose from 'mongoose';

const rentSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'books', required: true },
  rentDay: { type: Date, required: true },
  rentedDays: { type: Number, required: true },
  rentAmount: { type: Number, required: true },
  status: { type: String, required: true },
});

const Rents = mongoose.model('rent', rentSchema);

export default Rents;
