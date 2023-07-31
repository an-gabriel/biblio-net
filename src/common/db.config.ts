import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/biblionetdb');

const db = mongoose.connection;

export default db;